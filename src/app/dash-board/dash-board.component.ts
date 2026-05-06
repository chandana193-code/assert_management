import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  totalAssets = 6;
  available = 1;
  assigned = 4;
  pending = 3;
  users = 3;
}
