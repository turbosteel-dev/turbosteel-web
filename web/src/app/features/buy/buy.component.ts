import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  buyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.buyForm = this.formBuilder.group({
      state: ['', Validators.required],
      district: [''],
      taluk: [''],
      pincode: ['', Validators.required]
    })
  }

  onSubmit(){
    
  }
}
