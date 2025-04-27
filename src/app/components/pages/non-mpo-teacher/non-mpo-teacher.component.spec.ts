import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMpoTeacherComponent } from './non-mpo-teacher.component';

describe('NonMpoTeacherComponent', () => {
  let component: NonMpoTeacherComponent;
  let fixture: ComponentFixture<NonMpoTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMpoTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonMpoTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
