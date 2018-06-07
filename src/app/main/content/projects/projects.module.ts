import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { ProjectsComponent } from './projects.component';
import { GithubComponent } from './github/github.component';
import { GithubDetailComponent } from './github-detail/github-detail.component';
import { GithubService } from '../../../github.service';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';


const routes = [
    {
        path     : 'project/:id',
        component: ProjectsComponent
    },
    {
      path     : 'github',
      component: GithubComponent
    },
    {
      path     : 'github/:id',
      component: GithubDetailComponent
    },
];

@NgModule({
    declarations: [
      ProjectsComponent,
      GithubComponent,
      GithubDetailComponent
    ],
    providers: [GithubService],
    imports     : [
        RouterModule.forChild(routes),
        MarkdownToHtmlModule.forRoot(),
        TranslateModule,
        FuseSharedModule, 
        AngularMaterialModule
    ],
    exports     : [
      ProjectsComponent,
      GithubComponent,
      GithubDetailComponent
    ]
})

export class ProjectsModule
{
}
