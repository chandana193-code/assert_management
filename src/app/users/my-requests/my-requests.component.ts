import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit{

  requests: any[] = [];

  ngOnInit() {
    this.requests = [
      {
        asset: 'Laptop',
        category: 'IT',
        serial: 'N/A',
        date: '2026-04-18',
        status: 'Approved',
        remark: 'Approved'
      },
      {
        asset: 'Mouse',
        category: 'IT',
        serial: 'N/A',
        date: '2026-04-01',
        status: 'Approved',
        remark: 'Approved for sprint work'
      }
    ];
  }
}
