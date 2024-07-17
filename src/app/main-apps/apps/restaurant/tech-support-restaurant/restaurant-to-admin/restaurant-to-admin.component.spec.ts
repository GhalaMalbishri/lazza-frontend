import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantToAdminComponent } from './restaurant-to-admin.component';

describe('RestaurantToAdminComponent', () => {
  let component: RestaurantToAdminComponent;
  let fixture: ComponentFixture<RestaurantToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
