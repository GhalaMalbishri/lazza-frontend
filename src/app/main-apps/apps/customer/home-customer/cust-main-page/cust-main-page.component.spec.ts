import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMainPageComponent } from './cust-main-page.component';

describe('CustMainPageComponent', () => {
  let component: CustMainPageComponent;
  let fixture: ComponentFixture<CustMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
