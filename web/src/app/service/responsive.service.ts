import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  isResponsiveOpen = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  openResponsive() {
    this.isResponsiveOpen.next(true);
     document.body.style.overflowY = 'hidden'
  }

  closeResponsive() {
    this.isResponsiveOpen.next(false);
    document.body.style.overflowY = 'auto';
  }
}
