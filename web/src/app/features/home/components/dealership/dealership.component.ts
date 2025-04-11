import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.scss']
})
export class DealershipComponent {

  dealershipUrl = '/api/home/homeRegistration'
  dealershipData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.dealershipUrl).subscribe(response => {
      this.dealershipData = response;
    })
  }

}
