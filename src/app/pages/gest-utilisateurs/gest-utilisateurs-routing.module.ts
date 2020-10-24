import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
      path:'list',
      component:ListUtilisateursComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestUtilisateursRoutingModule { }
