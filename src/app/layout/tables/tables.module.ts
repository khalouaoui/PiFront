import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms' ;
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, TranslateModule,NgbModule,ReactiveFormsModule,FormsModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
