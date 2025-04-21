import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-toggle',
  templateUrl: './contact-toggle.component.html',
  styleUrls: ['./contact-toggle.component.scss']
})
export class ContactToggleComponent {
  showPhone = false;
  showEmail = false;

  togglePhone() {
    this.showPhone = !this.showPhone;
    this.showEmail = false;
  }

  toggleEmail() {
    this.showEmail = !this.showEmail;
    this.showPhone = false;
  }
}
