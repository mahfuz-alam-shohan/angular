import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMpoOfficeStaffComponent } from './non-mpo-office-staff.component';

describe('NonMpoOfficeStaffComponent', () => {
  let component: NonMpoOfficeStaffComponent;
  let fixture: ComponentFixture<NonMpoOfficeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMpoOfficeStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonMpoOfficeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
