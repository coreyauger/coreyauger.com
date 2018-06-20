
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, bindNodeCallback } from 'rxjs';

export interface Question{
  readonly id: string;
  readonly question: string;
  readonly solution: string;
  readonly solutionRuntime: string;
  readonly solutionSpace: string;
  readonly hints: string[];
}

export interface CodingQuestions{
  readonly questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionsUrl = 'assets/data/questions.json';
  
  completedQuestions = localStorage.getItem('completedQuestions') ? JSON.parse( localStorage.getItem('completedQuestions') ) : [];

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<CodingQuestions>(this.questionsUrl);
  }

  getRandomQuestion( filterCategories: string[] ): Observable<Question> {
    return this.getQuestions().map(x => {
      const filtered = x.questions.filter( y => filterCategories.indexOf(y.id.split('.')[0] ) === -1 && this.completedQuestions.indexOf(y.id.split('.')[0]) === -1  );      
      const ind = Math.floor(Math.random() * filtered.length + 1 );
      console.log('ind', ind);
      console.log('filtered', filtered.length);
      console.log('filtered', filtered[ind]);
      this.completedQuestions = [...this.completedQuestions, filtered[ind].id];
      localStorage.setItem('completedQuestions', JSON.stringify(this.completedQuestions));
      return filtered[ind];
    });
  }
}
