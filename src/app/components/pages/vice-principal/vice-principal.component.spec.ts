import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VicePrincipalComponent } from './vice-principal.component';

describe('VicePrincipalComponent', () => {
  let component: VicePrincipalComponent;
  let fixture: ComponentFixture<VicePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VicePrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VicePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
