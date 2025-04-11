import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingEdgeTechnologyComponent } from './cutting-edge-technology.component';

describe('CuttingEdgeTechnologyComponent', () => {
  let component: CuttingEdgeTechnologyComponent;
  let fixture: ComponentFixture<CuttingEdgeTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuttingEdgeTechnologyComponent]
    });
    fixture = TestBed.createComponent(CuttingEdgeTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
