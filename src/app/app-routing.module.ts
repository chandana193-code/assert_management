import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MyRequestsComponent } from './users/my-requests/my-requests.component';
import { RequestAssetComponent } from './users/request-asset/request-asset.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path: '', component: LoginComponent},
  
  // {path:'UserLayout', component: UserLayoutComponent, children: [
  //   {path:'MyAsset', component: MyAssetComponent},
  //   {path:'dashboard', component: UserDashboradComponent},
  //   {path:'profile', component: ProfileComponent},
  //   {path: '', redirectTo: 'MyAsset', pathMatch:'full'}
  // ]},
  // {path: '', redirectTo: 'login', pathMatch:'full'},
  // { path: 'register', component: RegistrationComponent },
  // { path: '', component: LoginComponent },

  {
    path: 'UserLayout',
    component: UserLayoutComponent,
    children: [
      { path: 'MyAsset', component: MyAssetComponent },
      { path: 'dashboard', component: UserDashboradComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'MyRequests', component:MyRequestsComponent},
      { path: 'RequestAsset', component: RequestAssetComponent },
      { path: '', redirectTo: 'MyAsset', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
