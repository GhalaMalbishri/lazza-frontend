import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAdComponent } from './request-ad.component';

describe('RequestAdComponent', () => {
  let component: RequestAdComponent;
  let fixture: ComponentFixture<RequestAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
