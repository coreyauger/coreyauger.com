import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
