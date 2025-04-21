import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
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
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    HomeDialogComponent
  ]
})
export class SharedModule { }
