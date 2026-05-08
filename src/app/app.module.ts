import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';

import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { MyRequestsComponent } from './users/my-requests/my-requests.component';
import { RequestAssetComponent } from './users/request-asset/request-asset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    MyAssetComponent,
    UserDashboradComponent,
    RegistrationComponent,
    HeaderComponent,
    UserLayoutComponent,
    UserDashboradComponent,
    ProfileComponent,
    AddAssetComponent,
    MyRequestsComponent,
    RequestAssetComponent,
    RegistrationComponent,
    UserDashboradComponent,
    MyAssetComponent,
     AppComponent,
     DashBoardComponent,
     SideBarComponent,
     AdminLayoutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }