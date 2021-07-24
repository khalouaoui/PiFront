import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {RouterModule} from '@angular/router';
import { SignupComponent } from './AddOffer/signup.component';
import { SignupModule } from './AddOffer/signup.module';
import { OffresComponent } from './layout/offres/offres.component';
import { OffresModule } from './layout/offres/offres.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        RouterModule



    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
