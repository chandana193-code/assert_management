import { Component } from '@angular/core';

@Component({
  selector: 'app-my-asset',
  templateUrl: './my-asset.component.html',
  styleUrls: ['./my-asset.component.css']
})
export class MyAssetComponent {
  assignedAssets = 0;
  totalRequests = 0;
  pending = 0;
  approved = 0;
  rejected = 0;

  
}
