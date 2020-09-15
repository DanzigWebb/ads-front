import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhitepageRoutingModule } from './whitepage-routing.module';
import { WhitepageComponent } from './whitepage.component';
import { SharedModule } from '../shared/shared.module';
import { WhitepageHandComponent } from './whitepage-hand/whitepage-hand.component';


@NgModule({
  declarations: [WhitepageComponent, WhitepageHandComponent],
  imports: [
    CommonModule,
    WhitepageRoutingModule,
    SharedModule
  ]
})
export class WhitepageModule { }
