import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboradComponent } from './users/user-dashborad/user-dashborad.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'user-dashboard', component: UserDashboradComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
