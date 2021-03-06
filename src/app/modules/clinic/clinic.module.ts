import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ClinicRoutingModule } from './clinic-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { ImportComponent } from './pages/import/import.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [SearchComponent, ImportComponent, DetailsComponent],
  imports: [CommonModule, ClinicRoutingModule, SharedModule],
})
export class ClinicModule {}
