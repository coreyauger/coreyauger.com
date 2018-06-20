
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
  

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<CodingQuestions>(this.questionsUrl);
  }
}
