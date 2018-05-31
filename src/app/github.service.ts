import { Injectable } from '@angular/core';
import { Observable, bindNodeCallback } from 'rxjs';
import * as GitHub from 'github-api';

const gh = new GitHub();


export interface Repository{
  readonly id: string;
  readonly archived: boolean;
  readonly created_at: string;
  readonly default_branch: string;
  readonly description: string;
  readonly full_name: string;
  readonly has_wiki: boolean;
  readonly homepage: string;
  readonly name: string;
  readonly watchers: number;
  readonly html_url: string;
}



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }


  getRepos(user: string): Observable<Repository[]>  {
    const gitUser = gh.getUser(user);
    return Observable.create(observer => {
      gitUser.listRepos( (err, repos) => {      
        if (err) {
          observer.error(err);
        }
        observer.next(repos);
        observer.complete();
      });
    });      
  }

  getReadMe(user: string, id: string): Observable<string> {
    const gitRepo = gh.getRepo(user, id);    
    return Observable.create(observer => {
      console.log('test');
      gitRepo.getReadme('master', true, (err, md) => {    
        console.log('md', md);
        if (err) {
          observer.error(err);
        }
        observer.next(md);
        observer.complete();
      });      
    });
  }
}
