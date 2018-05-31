import { Component, OnInit, OnDestroy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { GithubService, Repository } from '../../../../github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fuse-app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  animations   : fuseAnimations
})
export class GithubComponent implements OnInit, OnDestroy {
  repos: Repository[];
  filteredRepos: Repository[]; 

  constructor(private githubService: GithubService) { }

  reposSubscription: Subscription;


  ngOnInit(){
      this.reposSubscription = this.githubService.getRepos('coreyauger')
        .subscribe(repos => this.filteredRepos = this.repos = repos);

  }

  ngOnDestroy(){
      this.reposSubscription.unsubscribe();      
  }

}
