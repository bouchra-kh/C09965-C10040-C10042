import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestEmployesRoutingModule } from './gest-employes-routing.module';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployesComponent } from './update-employes/update-employes.component';


@NgModule({
  declarations: [ListEmployesComponent, AddEmployesComponent, UpdateEmployesComponent],
  imports: [
    CommonModule,
    GestEmployesRoutingModule,
      FormsModule
  ]
})
export class GestEmployesModule { }
