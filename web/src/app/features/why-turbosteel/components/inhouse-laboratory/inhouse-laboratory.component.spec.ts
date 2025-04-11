import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhouseLaboratoryComponent } from './inhouse-laboratory.component';

describe('InhouseLaboratoryComponent', () => {
  let component: InhouseLaboratoryComponent;
  let fixture: ComponentFixture<InhouseLaboratoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InhouseLaboratoryComponent]
    });
    fixture = TestBed.createComponent(InhouseLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
