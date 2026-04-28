import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { MyRequestsComponent } from './users/my-requests/my-requests.component';
import { RequestAssetComponent } from './users/request-asset/request-asset.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent, 
    MyAssetComponent,
    UserDashboradComponent,
    RegistrationComponent,
    HeaderComponent,
    UserLayoutComponent,
    UserDashboradComponent,
    ProfileComponent,
    AddAssetComponent,
    MyRequestsComponent,
    RequestAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
