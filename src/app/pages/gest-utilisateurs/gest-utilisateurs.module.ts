import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestUtilisateursRoutingModule } from './gest-utilisateurs-routing.module';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';


@NgModule({
  declarations: [ListUtilisateursComponent],
  imports: [
    CommonModule,
    GestUtilisateursRoutingModule
  ]
})
export class GestUtilisateursModule { }
