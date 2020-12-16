import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicRoutingModule } from './clinic-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ImportComponent } from './pages/import/import.component';

@NgModule({
  declarations: [ListComponent, ImportComponent],
  imports: [CommonModule, ClinicRoutingModule],
})
export class ClinicModule {}
