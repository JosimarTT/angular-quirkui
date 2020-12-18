import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/index',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'clinic',
        loadChildren: () =>
          import('@modules/clinic/clinic.module').then((m) => m.ClinicModule),
      },
      {
        path: 'dossier',
        loadChildren: () =>
          import('@modules/dossier/dossier.module').then(
            (m) => m.DossierModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard/index',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
