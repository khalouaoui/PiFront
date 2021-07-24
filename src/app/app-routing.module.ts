import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';


const routes: Routes = [
    /*{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },*/
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
    { path: 'offer', loadChildren: () => import('./AddOffer/signup.module').then(m => m.SignupModule) },
    /*{ path: '**', redirectTo: 'not-found' },*/
    /*{ path: '**', redirectTo: 'not-found' },*/
    { path: 'dash', loadChildren: () => import('./layout/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
