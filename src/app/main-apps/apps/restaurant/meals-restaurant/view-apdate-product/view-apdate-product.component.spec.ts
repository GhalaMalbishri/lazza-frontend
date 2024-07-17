import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApdateProductComponent } from './view-apdate-product.component';

describe('ViewApdateProductComponent', () => {
  let component: ViewApdateProductComponent;
  let fixture: ComponentFixture<ViewApdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
