import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-manufacturing-process',
  templateUrl: './manufacturing-process.component.html',
  styleUrls: ['./manufacturing-process.component.scss']
})
export class ManufacturingProcessComponent {

  technologyUrl = '/api/home/homeTechnologyList'
  technologyData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.technologyUrl).subscribe(response => {
      this.technologyData = response;
    })
  }

}
