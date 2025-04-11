import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {

  faqUrl = '/api/home/frequentlyQuestion'
  faqData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(this.faqUrl).subscribe(response => {
      this.faqData = response;
    })
  }
}
