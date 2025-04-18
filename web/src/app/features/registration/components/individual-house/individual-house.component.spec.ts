import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualHouseComponent } from './individual-house.component';

describe('IndividualHouseComponent', () => {
  let component: IndividualHouseComponent;
  let fixture: ComponentFixture<IndividualHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualHouseComponent]
    });
    fixture = TestBed.createComponent(IndividualHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
