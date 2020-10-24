import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'admin',component:AdminComponent,
  canActivate: [AuthGuardGuard],
  children: [{
    path:'',
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule )
  }
  ]
},
  {path:'',redirectTo:'/admin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
