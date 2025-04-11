import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-news-center',
  templateUrl: './news-center.component.html',
  styleUrls: ['./news-center.component.scss']
})
export class NewsCenterComponent {

  newscenterUrl = '/api/home/newsLetter'
  newscenterData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.newscenterUrl).subscribe(response => {
      this.newscenterData = response;
    })
  }

}
