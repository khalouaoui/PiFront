import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffresComponent } from './offres.component';

const routes: Routes = [
  {
    path : '' , component : OffresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
