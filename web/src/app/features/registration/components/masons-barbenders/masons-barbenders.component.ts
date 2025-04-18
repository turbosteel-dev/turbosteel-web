import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-masons-barbenders',
  templateUrl: './masons-barbenders.component.html',
  styleUrls: ['./masons-barbenders.component.scss']
})
export class MasonsBarbendersComponent {
  masonbarbendersForm!: FormGroup;
  masonBarbenderUrl = '/api/mansons'
  masonBarbenderBannerUrl = '/api/forms/masonsBanner';
  masonBarbenderBannerData: any;
  selectedFiles: any = {
    photograph: null,
    idProof: null,
    addressProof: null
  };
  masonBarbenderData: any;
  @ViewChild('photoInput') photoInput!: ElementRef;
  @ViewChild('idProofInput') idProofInput!: ElementRef;
  @ViewChild('addressProofInput') addressProofInput!: ElementRef;


  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.onLoadBanner();
    this.buildForm();
  }

  onLoadBanner() {
    this.http.get(this.masonBarbenderBannerUrl).subscribe(response => {
      this.masonBarbenderBannerData = response;
    });
  }

  buildForm() {
    this.masonbarbendersForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      type: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      houseNumber: [''],
      city: [''],
      state: [''],
      pincode: [''],
      aniversaryDate: [''],
      name_of_employee: [''],
      name_of_projects: [''],
      dealer_associate: [''],
      operation_area: [''],
      name_of_officer: [''],
      place: [''],
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
        this.masonbarbendersForm.get(type)?.setErrors(null);
      } else {
        this.selectedFiles[type] = null;
        this.masonbarbendersForm.get(type)?.setErrors({ invalidFileType: true });

        if (type === 'photograph') this.photoInput.nativeElement.value = '';
        if (type === 'idProof') this.idProofInput.nativeElement.value = '';
        if (type === 'addressProof') this.addressProofInput.nativeElement.value = '';

        this.snackBar.open('Invalid file type. Please upload JPG or PNG only.', 'Okay', { duration: 4000 });
      }
    }
  }


  onSubmit() {
    const formData = new FormData();

    if (this.masonbarbendersForm.valid) {

      formData.append('name', this.masonbarbendersForm.value.name);
      formData.append('phone', this.masonbarbendersForm.value.phone);
      formData.append('type', this.masonbarbendersForm.value.type);
      formData.append('dob', this.masonbarbendersForm.value.dob);
      formData.append('email', this.masonbarbendersForm.value.email);
      formData.append('houseNumber', this.masonbarbendersForm.value.houseNumber);
      formData.append('city', this.masonbarbendersForm.value.city);
      formData.append('state', this.masonbarbendersForm.value.state);
      formData.append('pincode', this.masonbarbendersForm.value.pincode);
      formData.append('aniversaryDate', this.masonbarbendersForm.value.aniversaryDate);
      formData.append('name_of_employee', this.masonbarbendersForm.value.name_of_employee);
      formData.append('name_of_projects', this.masonbarbendersForm.value.name_of_projects);
      formData.append('dealer_associate', this.masonbarbendersForm.value.dealer_associate);
      formData.append('operation_area', this.masonbarbendersForm.value.operation_area);
      formData.append('name_of_officer', this.masonbarbendersForm.value.name_of_officer);
      formData.append('place', this.masonbarbendersForm.value.place);

      if (this.selectedFiles.photograph) {
        formData.append('photograph', this.selectedFiles.photograph);
      }
      if (this.selectedFiles.idProof) {
        formData.append('idProof', this.selectedFiles.idProof);
      }
      if (this.selectedFiles.addressProof) {
        formData.append('addressProof', this.selectedFiles.addressProof);
      }

      this.http.post(this.masonBarbenderUrl, formData).subscribe(response => {
        this.masonBarbenderData = response;
        console.log(this.masonBarbenderData)
        this.masonbarbendersForm.reset();

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