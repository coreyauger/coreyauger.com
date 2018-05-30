import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { ProjectsComponent } from './projects.component';

const routes = [
    {
        path     : 'projects',
        component: ProjectsComponent
    }
];

@NgModule({
    declarations: [
      ProjectsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
      ProjectsComponent
    ]
})

export class ProjectsModule
{
}
