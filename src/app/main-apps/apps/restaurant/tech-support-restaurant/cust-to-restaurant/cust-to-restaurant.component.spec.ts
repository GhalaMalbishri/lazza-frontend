import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustToRestaurantComponent } from './cust-to-restaurant.component';

describe('CustToRestaurantComponent', () => {
  let component: CustToRestaurantComponent;
  let fixture: ComponentFixture<CustToRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustToRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustToRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
