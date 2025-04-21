import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeDialogComponent } from './components/home-dialog/home-dialog.component';


@NgModule({
  declarations: [
    HomeDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HomeDialogComponent
  ]
})
export class SharedModule { }
