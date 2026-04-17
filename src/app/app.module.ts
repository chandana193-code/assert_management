import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< Updated upstream
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
=======
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< Updated upstream
    AdminDashboardComponent,
    AdminLayoutComponent, 
    MyAssetComponent,
    UserDashboradComponent
=======
    RegistrationComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< Updated upstream
    HttpClientModule,
    RouterModule   
=======
     HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
