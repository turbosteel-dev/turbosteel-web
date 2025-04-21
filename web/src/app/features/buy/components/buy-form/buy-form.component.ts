import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss']
})
export class BuyFormComponent {
  buyForm!: FormGroup;
  distributorsUrl = '/api/distributors';
  distributorsData: any[] = [];

  filteredDistricts: string[] = [];
  filteredTaluks: string[] = [];
  filteredDistributors: any[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.buildForm();
    this.getDistributors();
    this.setupFormListeners();
    this.buyForm.get('pincode')?.valueChanges.subscribe(value => {
      if (value?.length === 6) {
        this.filterDistributors();
      } else {
        this.filteredDistributors = [];
      }
    });
  }

  buildForm() {
    this.buyForm = this.formBuilder.group({
      state: ['', Validators.required],
      district: [''],
      taluk: [''],
      pincode: ['', Validators.required]
    });
  }

  setupFormListeners() {
    this.buyForm.get('state')?.valueChanges.subscribe(state => {
      console.log('State changed:', state);
      const districts = this.distributorsData
        .filter(dist => this.sanitizeString(dist.state) === this.sanitizeString(state))
        .map(dist => dist.district?.trim());

      this.filteredDistricts = Array.from(new Set(districts));
      this.buyForm.patchValue({ district: '', taluk: '', pincode: '' }, { emitEvent: false });

      this.filteredTaluks = [];
      this.filteredDistributors = [];
    });

    this.buyForm.get('district')?.valueChanges.subscribe(district => {
      console.log('District changed:', district);
      const taluks = this.distributorsData
        .filter(dist => this.sanitizeString(dist.district) === this.sanitizeString(district))
        .map(dist => dist.taluk?.trim());

      this.filteredTaluks = Array.from(new Set(taluks));
      this.buyForm.patchValue({ taluk: '', pincode: '' }, { emitEvent: false });
    });

    this.buyForm.get('taluk')?.valueChanges.subscribe(taluk => {
      console.log('Taluk changed:', taluk);
      if (taluk && taluk.trim() !== '') {
        setTimeout(() => this.filterDistributors(), 0);  
      }
    });

    this.buyForm.get('pincode')?.valueChanges.subscribe(() => {
      this.filterDistributors(); 
    });
  }

  sanitizeString(input: string): string {
    return input?.replace(/\s+/g, ' ').trim().toLowerCase() || '';
  }

  filterDistributors() {
    const formValues = this.buyForm.value;
  
    const state = this.sanitizeString(formValues.state);
    const district = this.sanitizeString(formValues.district);
    const taluk = this.sanitizeString(formValues.taluk);
    const pincode = formValues.pincode?.toString().trim();
      if (pincode && pincode.length < 6) {
      this.filteredDistributors = [];
      return;
    }
  
    this.filteredDistributors = this.distributorsData.filter(d => {
      const distState = this.sanitizeString(d.state);
      const distDistrict = this.sanitizeString(d.district);
      const distTaluk = this.sanitizeString(d.taluk);
      const distPincode = d.pincode?.toString().trim();
  
      return distState === state &&
        (!district || distDistrict === district) &&
        distTaluk === taluk &&
        (!pincode || distPincode === pincode);
    });
  
    console.log("Filtered Distributors:", this.filteredDistributors);
  }


  onPincodeChange() {
    const pincode = this.buyForm.get('pincode')?.value?.trim();
    if (pincode?.length === 6) {
      this.filterDistributors();
    } else {
      this.filteredDistributors = [];
    }
  }
  
  

  getDistributors() {
    this.http.get(this.distributorsUrl).subscribe((response: any) => {
      this.distributorsData = response;
    });
  }
}
