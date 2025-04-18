import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonsBarbendersComponent } from './masons-barbenders.component';

describe('MasonsBarbendersComponent', () => {
  let component: MasonsBarbendersComponent;
  let fixture: ComponentFixture<MasonsBarbendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonsBarbendersComponent]
    });
    fixture = TestBed.createComponent(MasonsBarbendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
