import { Component, OnInit } from '@angular/core';
import * as GitHub from 'github-api';

const gh = new GitHub();
var coreyauger = gh.getUser('coreyauger');
coreyauger.listRepos(function(err, repos) {
   // look at all the starred repos!
   console.log("repos", repos)
});

@Component({
  selector: 'fuse-app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
