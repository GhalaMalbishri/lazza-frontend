import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUserTypeComponent } from './signup-user-type.component';

describe('SignupUserTypeComponent', () => {
  let component: SignupUserTypeComponent;
  let fixture: ComponentFixture<SignupUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
