import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-individual-house',
  templateUrl: './individual-house.component.html',
  styleUrls: ['./individual-house.component.scss']
})
export class IndividualHouseComponent {
  houseForm!: FormGroup;
  individualHouseUrl = '/api/individualHouse/individualHouse';
  individualHouseData: any;
  individualHouseBannerUrl = '/api/forms/inHouseFormBanner';
  individualHouseBannerData: any;

  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.onLoadBanner();
    this.buildForm();
  }

  onLoadBanner() {
    this.http.get(this.individualHouseBannerUrl).subscribe(response => {
      this.individualHouseBannerData = response;
    });
  }


  buildForm() {
    this.houseForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      age: [''],
      professional: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      companyName: [''],
      houseNumber: [''],
      city: [''],
      state: [''],
      pincode: [''],
      remarks: ['']
    })
  }

  onSubmit() {
    if (this.houseForm.valid) {
      this.http.post(this.individualHouseUrl, this.houseForm.getRawValue()).subscribe(response => {
        this.individualHouseData = response;
        // console.log(this.houseForm.getRawValue());
        this.houseForm.reset();
        this.snackBar.open('Thank you for reaching out, we will get back to you soon', 'okay', { duration: 5000 })
      },
        error => {
          console.log('Error submitting the form', error)
          this.snackBar.open('Something went wrong. Please try again.', 'Okay', { duration: 5000 })
        }
      )
    }
    else {
      this.snackBar.open('Please check all the details in the form', 'Okay', { duration: 5000 })
    }
  }
}
