import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-architects-engineers',
  templateUrl: './architects-engineers.component.html',
  styleUrls: ['./architects-engineers.component.scss']
})
export class ArchitectsEngineersComponent {
  architectEngineersForm!: FormGroup;
  architectEngineersUrl = '/api/architects';
  architectEngineerData: any;
  architectBannerUrl = '/api/forms/architectBanner';
  architectBannerData: any;
  selectedFiles: any = {
    photograph: null,
    idProof: null,
    addressProof: null
  };
  @ViewChild('photoInput') photoInput!: ElementRef;
  @ViewChild('idProofInput') idProofInput!: ElementRef;
  @ViewChild('addressProofInput') addressProofInput!: ElementRef;

  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.onLoadBanner();
    this.buildForm();
  }

  onLoadBanner() {
    this.http.get(this.architectBannerUrl).subscribe(response => {
      this.architectBannerData = response;
    });
  }

  buildForm() {
    this.architectEngineersForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      profession: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      anniversaryDate: [''],
      companyName: [''],
      houseNumber: [''],
      city: [''],
      state: [''],
      pincode: [''],
      remarks: [''],
      name_of_sales: [''],
      sales_place: [''],
      name_of_dealer: [''],
      dealer_place: [''],
      photograph: [''],
      idProof: [''],
      addressProof: ['']
    })
  }

  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validTypes.includes(file.type)) {
        this.selectedFiles[type] = file;
        this.architectEngineersForm.get(type)?.setErrors(null);
      } else {
        this.selectedFiles[type] = null;
        this.architectEngineersForm.get(type)?.setErrors({invalidFileType: true});

        if (type === 'photograph') this.photoInput.nativeElement.value = '';
        if (type === 'idProof') this.idProofInput.nativeElement.value = '';
        if (type === 'addressProof') this.addressProofInput.nativeElement.value = '';

        this.snackBar.open('Invalid file type. Please upload JPG or PNG only.', 'Okay', { duration: 4000 });
      }
    }
  }

  onSubmit() {
    const formData = new FormData();

    if (this.architectEngineersForm.valid) {

      formData.append('name', this.architectEngineersForm.value.name);
      formData.append('phone', this.architectEngineersForm.value.phone);
      formData.append('profession', this.architectEngineersForm.value.profession);
      formData.append('dob', this.architectEngineersForm.value.dob);
      formData.append('email', this.architectEngineersForm.value.email);
      formData.append('anniversaryDate', this.architectEngineersForm.value.anniversaryDate);
      formData.append('companyName', this.architectEngineersForm.value.companyName);
      formData.append('houseNumber', this.architectEngineersForm.value.houseNumber);
      formData.append('city', this.architectEngineersForm.value.city);
      formData.append('state', this.architectEngineersForm.value.state);
      formData.append('pincode', this.architectEngineersForm.value.pincode);
      formData.append('remarks', this.architectEngineersForm.value.remarks);
      formData.append('name_of_sales', this.architectEngineersForm.value.name_of_sales);
      formData.append('sales_place', this.architectEngineersForm.value.sales_place);
      formData.append('name_of_dealer', this.architectEngineersForm.value.name_of_dealer);
      formData.append('dealer_place', this.architectEngineersForm.value.dealer_place);

      if (this.selectedFiles.photograph) {
        formData.append('photograph', this.selectedFiles.photograph);
      }
      if (this.selectedFiles.idProof) {
        formData.append('idProof', this.selectedFiles.idProof);
      }
      if (this.selectedFiles.addressProof) {
        formData.append('addressProof', this.selectedFiles.addressProof);
      }

      this.http.post(this.architectEngineersUrl, formData).subscribe(response => {
        this.architectEngineerData = response;
        this.architectEngineersForm.reset();
        this.selectedFiles = {
          photograph: null,
          idProof: null,
          addressProof: null
        }

        this.photoInput.nativeElement.value = '';
        this.idProofInput.nativeElement.value = '';
        this.addressProofInput.nativeElement.value = '';

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
