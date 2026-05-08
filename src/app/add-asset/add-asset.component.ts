import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AssetService } from '../asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent {

  form: FormGroup;

  loading = false;

  previewUrl: any;

  selectedFile!: File;

  todayDate = new Date().toISOString().split('T')[0];

  generatedAssetId =
    'AST-' + Math.floor(1000 + Math.random() * 9000);

  categories = [
    'Laptop',
    'Desktop',
    'Monitor',
    'Printer',
    'Networking',
    'Mobile'
  ];

  conditions = [
    'Excellent',
    'Good',
    'Needs Repair',
    'Damaged'
  ];

  constructor(
    private fb: FormBuilder,
    private assetService: AssetService,
    private router: Router,
    private location: Location
  ) {

    this.form = this.fb.group({

      assetId: [this.generatedAssetId],

      name: [
        '',
        Validators.required
      ],

      category: [
        '',
        Validators.required
      ],

      serialNumber: [
        '',
        Validators.required
      ],

      purchaseDate: [
        '',
        Validators.required
      ],

      warrantyDate: [''],

      status: ['Available'],

      condition: ['Excellent'],

      cost: [
        '',
        Validators.min(0)
      ],

      location: ['']
    });
  }

  isInvalid(controlName: string): boolean {

    const control = this.form.get(controlName);

    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }

  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.includes('image')) {
      alert('Only image files allowed');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be below 5MB');
      return;
    }

    this.selectedFile = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl = reader.result;
    };

    reader.readAsDataURL(file);
  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const formData = new FormData();

    Object.keys(this.form.value)
      .forEach(key => {

        formData.append(
          key,
          this.form.value[key]
        );
      });

    if (this.selectedFile) {

      formData.append(
        'image',
        this.selectedFile
      );
    }

    this.assetService
      .createAsset(formData)
      .subscribe({

        next: (res) => {

          console.log(res);

          this.loading = false;

          alert(
            'Asset added successfully'
          );

          this.router.navigate([
            '/admin/assets'
          ]);
        },

        error: (err) => {

          console.error(err);

          this.loading = false;

          alert(
            'Failed to add asset'
          );
        }
      });
  }

  cancel(): void {
    // this.router.navigate(['/admin']);
    this.form.reset();
  }

}