import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentService } from '../../../content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fuse-app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  contentSubscription: Subscription;
  @Input() content: string;  
  @Input() id: string;  

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contentSubscription = this.contentService.getContent(this.id)
      .subscribe(content => {
        this.content = content;
      });   
  }

}
