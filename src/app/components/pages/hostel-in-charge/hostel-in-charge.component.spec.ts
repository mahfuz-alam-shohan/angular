import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelInChargeComponent } from './hostel-in-charge.component';

describe('HostelInChargeComponent', () => {
  let component: HostelInChargeComponent;
  let fixture: ComponentFixture<HostelInChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelInChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelInChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
