import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErmOverviewComponent } from './erm-overview.component';

describe('ErmOverviewComponent', () => {
  let component: ErmOverviewComponent;
  let fixture: ComponentFixture<ErmOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErmOverviewComponent]
    });
    fixture = TestBed.createComponent(ErmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
