import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminHeaderComponent } from './restaurant-admin-header.component';

describe('RestaurantAdminHeaderComponent', () => {
  let component: RestaurantAdminHeaderComponent;
  let fixture: ComponentFixture<RestaurantAdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
