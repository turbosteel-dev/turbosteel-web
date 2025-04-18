import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBannerComponent } from './about-us-banner.component';

describe('AboutUsBannerComponent', () => {
  let component: AboutUsBannerComponent;
  let fixture: ComponentFixture<AboutUsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsBannerComponent]
    });
    fixture = TestBed.createComponent(AboutUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
