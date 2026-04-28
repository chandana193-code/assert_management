import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
 

  getStats(): Observable<any> {
    return of({
      users: 150,
      orders: 89,
      revenue: 72000
    });
  }

  getActivities(): Observable<any[]> {
    return of([
      { text: 'New user registered', time: '2 mins ago' },
      { text: 'Order completed', time: '10 mins ago' },
      { text: 'Payment received', time: '25 mins ago' }
    ]);
  }



}
