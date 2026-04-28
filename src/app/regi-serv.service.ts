import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegiServService {
  
  api='http://localhost:3000/user';
  constructor(private db:HttpClient) { }

post(data:any){
return this.db.post(this.api,data)
}
get(){
  return this.db.get(this.api);
}


}
