import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './pages/import/import.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dossier/search',
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
    ],
  },
  {
    path: '**',
    redirectTo: '/dossier/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DossierRoutingModule {}
