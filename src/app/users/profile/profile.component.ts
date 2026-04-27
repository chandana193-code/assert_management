import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user = {
  name: 'John',
  email: 'john@example.com',
  role: 'Employee',
  department: 'IT'
};
}
