import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpoOfficeStaffComponent } from './mpo-office-staff.component';

describe('MpoOfficeStaffComponent', () => {
  let component: MpoOfficeStaffComponent;
  let fixture: ComponentFixture<MpoOfficeStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpoOfficeStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpoOfficeStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
