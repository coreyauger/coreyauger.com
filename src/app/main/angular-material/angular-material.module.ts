import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatExpansionModule, MatButtonModule, MatSlideToggleModule, MatProgressSpinnerModule, MatListModule, MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
