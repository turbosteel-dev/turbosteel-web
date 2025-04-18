import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsEngineersComponent } from './architects-engineers.component';

describe('ArchitectsEngineersComponent', () => {
  let component: ArchitectsEngineersComponent;
  let fixture: ComponentFixture<ArchitectsEngineersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchitectsEngineersComponent]
    });
    fixture = TestBed.createComponent(ArchitectsEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
