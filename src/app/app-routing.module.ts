import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';
import { MyAssetComponent } from './users/my-asset/my-asset.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: '', component: LoginComponent },

  {
    path: 'dashboard',
    component: UserDashboradComponent,
    children: [
      { path: 'MyAsset', component: MyAssetComponent },
      { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
