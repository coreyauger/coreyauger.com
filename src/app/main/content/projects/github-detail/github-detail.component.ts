import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService, Repository } from '../../../../github.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'fuse-app-github-detail',
  templateUrl: './github-detail.component.html',
  styleUrls: ['./github-detail.component.scss']
})
export class GithubDetailComponent implements OnInit, OnDestroy, OnChanges {

  
  reposSubscription: Subscription;
  markdownSubscription: Subscription;
  @Input() repo: Repository;  
  @Input() markdown: string;  

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.reposSubscription = this.githubService.getRepos('coreyauger')
      .subscribe(repos => {
        this.repo = repos.find(x => x.id == id);
        this.markdownSubscription = this.githubService.getReadMe('coreyauger', this.repo.name).subscribe(md => {
          console.log(md);
          this.markdown = md;         
        });
      });     
    
    
  }
  ngOnChanges(){
    console.log('changes !!!');
  }

  ngOnDestroy(){
     this.reposSubscription.unsubscribe();      
     this.markdownSubscription.unsubscribe();      
  }

  goBack(): void {
    this.location.back();
  }
}
