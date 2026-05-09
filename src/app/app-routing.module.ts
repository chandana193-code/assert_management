import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';




import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MyRequestsComponent } from './users/my-requests/my-requests.component';
import { RequestAssetComponent } from './users/request-asset/request-asset.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  
  {
    path: 'UserLayout',
    component: UserLayoutComponent,
    canActivate: [authGuard, roleGuard],
    data : { role : 'user'},
    children: [
      { path: 'MyAsset', component: MyAssetComponent },
      { path: 'dashboard', component: UserDashboradComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'MyRequests', component:MyRequestsComponent},
      { path: 'RequestAsset', component: RequestAssetComponent },
      { path: '', redirectTo: 'MyAsset', pathMatch: 'full' }
    ]
  },
  {
  path: 'adminlayout',
  component: AdminLayoutComponent,
  canActivate: [authGuard, roleGuard],
  data : { role : 'admin'},

  children: [

    {
      path: '',
      redirectTo: 'admindashboard',
      pathMatch: 'full'
    },

    {
      path: 'admindashboard',
      component: DashBoardComponent
    },

    {
      path: 'addAsset',
      component: AddAssetComponent
    }

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
