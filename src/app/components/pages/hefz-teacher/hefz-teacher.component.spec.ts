import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HefzTeacherComponent } from './hefz-teacher.component';

describe('HefzTeacherComponent', () => {
  let component: HefzTeacherComponent;
  let fixture: ComponentFixture<HefzTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HefzTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HefzTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
