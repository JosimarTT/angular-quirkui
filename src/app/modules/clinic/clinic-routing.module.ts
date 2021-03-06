import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ImportComponent } from './pages/import/import.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clinic/search',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'import',
        component: ImportComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/clinic/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicRoutingModule {}
