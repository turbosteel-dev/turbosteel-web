import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  contactUrl = '/api/contact/sendContactInformation';
  contactData: any;

  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.contactUrl, this.contactForm.getRawValue()).subscribe(response => {
        this.contactData = response;
        console.log(this.contactForm.getRawValue());
        this.contactForm.reset();
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