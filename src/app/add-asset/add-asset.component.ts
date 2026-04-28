import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      serialNumber: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      status: ['Available', Validators.required],
      condition: ['Good'],
      assignedUser: ['Unassigned']
    });
  }

  submit(): void {
    console.log('FORM:', this.form.value);

    if (this.form.invalid) {
      alert('Please fill all required fields');
      return;
    }

    this.assetService.createAsset(this.form.value).subscribe({
      next: (res) => {
        console.log('SUCCESS:', res);
        alert('Asset Added Successfully');
        this.router.navigate(['/admin/assets']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        alert('Error saving asset');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/assets']);
  }
}