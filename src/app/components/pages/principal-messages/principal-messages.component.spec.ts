import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMessagesComponent } from './principal-messages.component';

describe('PrincipalMessagesComponent', () => {
  let component: PrincipalMessagesComponent;
  let fixture: ComponentFixture<PrincipalMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
