import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';

import { DetailsPage } from './details.page';
const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule , // Put ionic-rating module here
    RouterModule.forChild(routes),
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
