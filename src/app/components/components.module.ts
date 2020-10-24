import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavabarComponent } from './navabar/navabar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotifPrimaryComponent } from './notif-primary/notif-primary.component';
 
import { RouterModule } from '@angular/router';
 



@NgModule({
  declarations: [NavabarComponent,SidebarComponent,NotifPrimaryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [NavabarComponent,SidebarComponent,NotifPrimaryComponent]
})
export class ComponentsModule { }
