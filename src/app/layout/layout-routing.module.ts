import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'user' , loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
            { path: 'soft-skill' , loadChildren: () => import('./soft-skill/soft-skill.module').then((m => m.SoftSkillModule))},
            { path: 'tech-skill' , loadChildren: () => import('./tech-skill/tech-skill.module').then(m => m.TechSkillModule)},
            { path: 'offers' , loadChildren: () => import('./offres/offres.module').then(m => m.OffresModule)},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
