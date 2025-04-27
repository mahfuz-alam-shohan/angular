import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpoTeacherComponent } from './mpo-teacher.component';

describe('MpoTeacherComponent', () => {
  let component: MpoTeacherComponent;
  let fixture: ComponentFixture<MpoTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpoTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpoTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
