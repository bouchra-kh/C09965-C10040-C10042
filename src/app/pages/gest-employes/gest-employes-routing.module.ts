import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { UpdateEmployesComponent } from './update-employes/update-employes.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
      path:'list',
      component:ListEmployesComponent
    },
    {
      path:'add',
      component: AddEmployesComponent
    },
    {
      path:'update/:id',
      component: UpdateEmployesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestEmployesRoutingModule { }
