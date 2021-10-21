import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVehiculesComponent } from './display-vehicules.component';

describe('DisplayVehiculesComponent', () => {
  let component: DisplayVehiculesComponent;
  let fixture: ComponentFixture<DisplayVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayVehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
