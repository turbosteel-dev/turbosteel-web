import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopupComponent } from './home-popup.component';

describe('HomePopupComponent', () => {
  let component: HomePopupComponent;
  let fixture: ComponentFixture<HomePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePopupComponent]
    });
    fixture = TestBed.createComponent(HomePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
