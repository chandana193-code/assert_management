import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegiServService } from '../regi-serv.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  showSuccess: boolean = false;
  store: any = [];

  values = {
    first: '',
    last: '',
    email: '',
    password: '',
    phno: ''
  }

  constructor(private f: FormBuilder, private b: RegiServService) { }

  registration = this.f.group({
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    phno: ['', [Validators.required]]
  });


  submit() {
    if (this.registration.invalid) {
      this.registration.markAllAsTouched(); // show errors in UI
      return;

    }

    const formData = this.registration.value;

    this.b.post(formData).subscribe(() => {
      this.getdata(); // refresh list
      this.registration.reset(); // clear form
    });

    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 1500);
  }

  ngOnInit() {
    this.getdata();
  }
  getdata() {
    this.b.get().subscribe((data: any) => {
      this.store = data;
    })
  }

  add() {
    this.b.post(this.values).subscribe(() => {
      alert("the data added successfully");
      this.getdata();
    })
  }
}
