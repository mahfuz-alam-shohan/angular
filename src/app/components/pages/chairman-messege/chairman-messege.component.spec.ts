import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanMessegeComponent } from './chairman-messege.component';

describe('ChairmanMessegeComponent', () => {
  let component: ChairmanMessegeComponent;
  let fixture: ComponentFixture<ChairmanMessegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanMessegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairmanMessegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
