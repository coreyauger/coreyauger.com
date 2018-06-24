import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService, Question } from '../../../../question.service';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'fuse-app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss'],
  animations   : fuseAnimations
})
export class QuestionDetailsComponent implements OnInit, OnDestroy {
  questionSubscription: Subscription;

  @Input() question: Question;
  

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.questionSubscription = this.questionService.getQuestions().subscribe( cq => {
      if ( id ){
        this.question = cq.questions.find(x => x.id === id.replace('_', '.') );
      }
      console.log('question', this.question);      
    });
  }

  ngOnDestroy(){
    this.questionSubscription.unsubscribe();
  }

  navigateRandomQuestion(){
    this.questionService.getRandomQuestion( [] ).subscribe( q => {
      this.question = q;
      this.router.navigateByUrl('/question/' + q.id);
    });
  }
}

