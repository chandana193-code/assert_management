import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegiServService } from '../regi-serv.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 

  store:any=[];
  
  values={
    first:'',
    last:'',
    email:'',
    pass:'',
    phno:''
  }

  constructor(private f:FormBuilder,private b:RegiServService){}
  
    registration=this.f.group({
      first:['',[Validators.required]],
      last:['',[Validators.required]],
      email:['',[Validators.required]],
      pass:['',[Validators.required]],
      phno:['',[Validators.required]]
    });
  
  
  submit() {
  const formData = this.registration.value;

  this.b.post(formData).subscribe(() => {
    alert("Data added successfully");
    this.getdata(); // refresh list
    this.registration.reset(); // clear form
  });
}

ngOnInit(){
  this.getdata();
}
getdata(){
  this.b.get().subscribe((data:any)=>{
    this.store=data;
  })
}

add(){
  this.b.post(this.values).subscribe(()=>{
    alert("the data added successfully");
    this.getdata();
  })
}




}
