import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService, Question } from '../../../../question.service';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'fuse-app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations   : fuseAnimations
})
export class QuestionComponent implements OnInit, OnDestroy {
  questionsSubscription: Subscription;

  questions: Question[];  
  categories: String[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.questionsSubscription = this.questionService.getQuestions().subscribe( cq => {
      this.questions = cq.questions;      
      console.log('questions', this.questions);      
    });
  }

  ngOnDestroy(){
    this.questionsSubscription.unsubscribe();
  }

  navigateRandomQuestion(){
    this.questionService.getRandomQuestion( [] ).subscribe( q => {
      this.router.navigateByUrl('/question/' + q.id);
    });
  }

}
