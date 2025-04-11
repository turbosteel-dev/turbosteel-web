import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingProcessComponent } from './manufacturing-process.component';

describe('ManufacturingProcessComponent', () => {
  let component: ManufacturingProcessComponent;
  let fixture: ComponentFixture<ManufacturingProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingProcessComponent]
    });
    fixture = TestBed.createComponent(ManufacturingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
