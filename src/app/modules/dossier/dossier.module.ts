import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DossierRoutingModule } from './dossier-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { ImportComponent } from './pages/import/import.component';

@NgModule({
  declarations: [SearchComponent, ImportComponent],
  imports: [CommonModule, DossierRoutingModule, SharedModule],
})
export class DossierModule {}
