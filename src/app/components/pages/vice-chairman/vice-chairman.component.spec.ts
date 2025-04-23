import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceChairmanComponent } from './vice-chairman.component';

describe('ViceChairmanComponent', () => {
  let component: ViceChairmanComponent;
  let fixture: ComponentFixture<ViceChairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViceChairmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViceChairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
