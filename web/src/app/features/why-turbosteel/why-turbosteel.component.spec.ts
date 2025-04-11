import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTurbosteelComponent } from './why-turbosteel.component';

describe('WhyTurbosteelComponent', () => {
  let component: WhyTurbosteelComponent;
  let fixture: ComponentFixture<WhyTurbosteelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyTurbosteelComponent]
    });
    fixture = TestBed.createComponent(WhyTurbosteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
