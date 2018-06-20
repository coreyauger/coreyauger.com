import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentService } from '../../../content.service';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'fuse-app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations   : fuseAnimations
})
export class ProjectsComponent implements OnInit, OnDestroy {

  contentSubscription: Subscription;
  @Input() content: string;  
  @Input() id: string;  

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        this.contentSubscription = this.contentService.getContent(this.id).subscribe(content => {
          this.content = content;
        }); 
      });
      
  }


  ngOnDestroy(){
    this.contentSubscription.unsubscribe();      
  }

}
