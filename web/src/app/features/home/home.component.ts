import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showPopup:boolean = false;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/' || this.router.url === '/home') {
      this.showPopup = true; // Show the popup only on home page
    }
  }

}
