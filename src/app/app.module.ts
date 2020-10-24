import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifPrimaryComponent } from './components/notif-primary/notif-primary.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { ComponentsModule } from './components/components.module';
import { MenuModuleRoutingModule } from './pages/page-routing.module';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ComponentsModule ,
    RouterModule
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
