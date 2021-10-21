import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculesComponent } from './add-vehicules.component';

describe('AddVehiculesComponent', () => {
  let component: AddVehiculesComponent;
  let fixture: ComponentFixture<AddVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
