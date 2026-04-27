import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';
import { UserLayoutComponent } from './users/user-layout/user-layout.component';
import { ProfileComponent } from './users/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'MyAsset', component: MyAssetComponent },
      { path: 'user-dashboard', component: UserDashboradComponent },
      { path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: 'MyAsset', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
