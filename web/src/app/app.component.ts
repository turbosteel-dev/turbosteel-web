import { Component } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ResponsiveService } from './service/responsive.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  constructor(private loaderService: LoaderService, public responsiveService: ResponsiveService,private router: Router,){}


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loaderService.hide();
        }, 500);
      }
    });
  }

}
