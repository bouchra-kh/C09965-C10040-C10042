import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'users',
  loadChildren: () => import('./gest-utilisateurs/gest-utilisateurs.module').then(m => m.GestUtilisateursModule )
},
  { path:'employes',
    loadChildren: () => import('./gest-employes/gest-employes.module').then(m => m.GestEmployesModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuModuleRoutingModule { }
