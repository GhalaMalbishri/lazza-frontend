import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteOtpComponent } from './write-otp.component';

describe('WriteOtpComponent', () => {
  let component: WriteOtpComponent;
  let fixture: ComponentFixture<WriteOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
