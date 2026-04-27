import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showDropdown = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  goToProfile() {
    this.showDropdown = false;
    this.router.navigate(['/profile']);
  }

  logout() {
    this.showDropdown = false;
    this.router.navigate(['/login']);
  }
}
