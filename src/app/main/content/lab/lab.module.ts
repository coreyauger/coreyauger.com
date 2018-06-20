import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { GithubService } from '../../../github.service';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { QuestionComponent } from './question/question.component';
import { LabComponent } from './lab.component';

const routes = [
  {
      path     : 'questions',
      component: QuestionComponent
  },
  {
    path     : 'lab',
    component: LabComponent
  },
  {
    path     : 'question/:id',
    component: QuestionComponent
  },
];

@NgModule({
  declarations: [QuestionComponent, LabComponent],
  providers: [GithubService],
  imports     : [
      RouterModule.forChild(routes),
      MarkdownToHtmlModule.forRoot(),
      TranslateModule,
      FuseSharedModule, 
      AngularMaterialModule
  ],
  exports     : [
    QuestionComponent,
    LabComponent,
  ]
})
export class LabModule { }


