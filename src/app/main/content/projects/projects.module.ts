import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ProjectsComponent } from './projects.component';
import { GithubComponent } from './github/github.component';

const routes = [
    {
        path     : 'projects',
        component: ProjectsComponent
    },
    {
      path     : 'projects/github',
      component: GithubComponent
  },
];

@NgModule({
    declarations: [
      ProjectsComponent,
      GithubComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
      ProjectsComponent,
      GithubComponent
    ]
})

export class ProjectsModule
{
}
