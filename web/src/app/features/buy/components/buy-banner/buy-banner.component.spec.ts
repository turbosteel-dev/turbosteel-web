import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBannerComponent } from './buy-banner.component';

describe('BuyBannerComponent', () => {
  let component: BuyBannerComponent;
  let fixture: ComponentFixture<BuyBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyBannerComponent]
    });
    fixture = TestBed.createComponent(BuyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
