import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.scss']
})
export class DealershipComponent {
  dealershipForm!: FormGroup;
  dealershipUrl = '/api/dealership'
  dealershipBannerUrl = '/api/forms/delearShipBanner';
  dealershipBannerData: any;

  dealershipData: any;

   selectedFiles: any = {
      photograph: null,
      gstCertificate: null,
      panCard: null,
      shopPhoto: null
    };
    @ViewChild('photoInput') photoInput!: ElementRef;
    @ViewChild('gstCertificateInput') gstCertificateInput!: ElementRef;
    @ViewChild('panCardInput') panCardInput!: ElementRef;
    @ViewChild('shopPhotoInput') shopPhotoInput!: ElementRef;

  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.onLoadBanner();
    this.buildForm();
  }

  onLoadBanner() {
    this.http.get(this.dealershipBannerUrl).subscribe(response => {
      this.dealershipBannerData = response;
    });
  }

  buildForm() {
    this.dealershipForm = this.formBuilder.group({
      companyName: [''],
      officeAddress: [''],
      city: [''],
      state: [''],
      pincode: [''],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gstNumber: [''],
      panNumber: [''],
      typeOfFirm: [''],
      firstOwnerName: [''],
      firstOwnerPhone: [''],
      firstOwnerEmail: [''],
      firstOwnerPlace: [''],
      firstOwnerHouseNumber: [''],
      firstOwnerCity: [''],
      firstOwnerState: [''],
      firstOwnerPincode: [''],
      secondOwnerName: [''],
      secondOwnerPhone: [''],
      secondOwnerEmail: [''],
      secondOwnerPlace: [''],
      secondOwnerHouseNumber: [''],
      secondOwnerCity: [''],
      secondOwnerState: [''],
      secondOwnerPincode: [''],
      firstOwnerGreetingSpouseName: [''],
      firstOwnerGreetingSpouseDob: [''],
      firstOwnerGreetingAniversaryDate: [''],
      firstOwnerGreetingChildOneName: [''],
      firstOwnerGreetingChildOneDob: [''],
      firstOwnerGreetingChildTwoname: [''],
      firstOwnerGreetingChildTwoDob: [''],
      firstOwnerGreetingChildThreename: [''],
      firstOwnerGreetingChildThreeDob: [''],
      secondOwnerGreetingSpouseName: [''],
      secondOwnerGreetingSpouseDob: [''],
      secondOwnerGreetingAniversaryDate: [''],
      secondOwnerGreetingChildOneName: [''],
      secondOwnerGreetingChildOneDob: [''],
      secondOwnerGreetingChildTwoname: [''],
      secondOwnerGreetingChildTwoDob: [''],
      secondOwnerGreetingChildThreename: [''],
      secondOwnerGreetingChildThreeDob: [''],
      bankName: [''],
      branch: [''],
      ifsc: [''],
      account_number: [''],
      depot_address: [''],
      depot_city: [''],
      depot_state: [''],
      depot_zip: [''],
      photograph: [''],
      gstCertificate: [''],
      panCard: [''],
      shopPhoto: ['']
    })
  }

  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validTypes.includes(file.type)) {
        this.selectedFiles[type] = file;
        this.dealershipForm.get(type)?.setErrors(null);
      } else {
        this.selectedFiles[type] = null;
        this.dealershipForm.get(type)?.setErrors({invalidFileType: true});

        if (type === 'photograph') this.photoInput.nativeElement.value = '';
        if (type === 'gstCertificate') this.gstCertificateInput.nativeElement.value = '';
        if (type === 'panCard') this.panCardInput.nativeElement.value = '';
        if (type === 'shopPhoto') this.shopPhotoInput.nativeElement.value = '';

        this.snackBar.open('Invalid file type. Please upload JPG or PNG only.', 'Okay', { duration: 4000 });
      }
    }
  }

  onSubmit() {
    const formData = new FormData();

    if(this.dealershipForm.valid){

      for (const key in this.dealershipForm.value) {
        if (
          key !== 'photograph' &&
          key !== 'gstCertificate' &&
          key !== 'panCard' &&
          key !== 'shopPhoto'
        ) {
          formData.append(key, this.dealershipForm.value[key]);
        }
      }
      
      if (this.selectedFiles.photograph) {
        formData.append('photograph', this.selectedFiles.photograph);
      }
      if (this.selectedFiles.gstCertificate) {
        formData.append('gstCertificate', this.selectedFiles.gstCertificate);
      }
      if (this.selectedFiles.panCard) {
        formData.append('panCard', this.selectedFiles.panCard);
      }
      if (this.selectedFiles.shopPhoto) {
        formData.append('shopPhoto', this.selectedFiles.shopPhoto);
      }

      this.http.post(this.dealershipUrl, formData).subscribe(response => {
        this.dealershipData = response;
        // console.log(this.dealershipData);
        // console.log(this.dealershipForm.getRawValue());
        this.dealershipForm.reset();
        this.selectedFiles = {
          photograph: null,
          gstCertificateInput: null,
          panCard: null,
          shopPhoto: null
        }

        this.photoInput.nativeElement.value = '';
        this.gstCertificateInput.nativeElement.value = '';
        this.panCardInput.nativeElement.value = '';
        this.shopPhotoInput.nativeElement.value = '';

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
