import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactToggleComponent } from './contact-toggle.component';

describe('ContactToggleComponent', () => {
  let component: ContactToggleComponent;
  let fixture: ComponentFixture<ContactToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactToggleComponent]
    });
    fixture = TestBed.createComponent(ContactToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
