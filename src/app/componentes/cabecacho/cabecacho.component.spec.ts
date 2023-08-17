import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecachoComponent } from './cabecacho.component';

describe('CabecachoComponent', () => {
  let component: CabecachoComponent;
  let fixture: ComponentFixture<CabecachoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabecachoComponent]
    });
    fixture = TestBed.createComponent(CabecachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
