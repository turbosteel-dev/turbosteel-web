import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  aboutUrl= '/api/about/aboutNumberList';
  aboutData: any;

  constructor(private http: HttpService){}

  ngOnInit(){
    this.onLoadAbout()
  }

  onLoadAbout(){
    this.http.get(this.aboutUrl).subscribe(response => {
      this.aboutData = response;
    })
  }
}
