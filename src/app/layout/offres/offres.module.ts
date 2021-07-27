import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { OffresComponent } from './offres.component';
import {ReactiveFormsModule} from '@angular/forms' ;
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ OffresComponent],
  imports: [
    OffresRoutingModule, PageHeaderModule, TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    OffresRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [DatePipe]
})
export class OffresModule { }
