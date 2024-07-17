import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouseOrdersComponent } from './previouse-orders.component';

describe('PreviouseOrdersComponent', () => {
  let component: PreviouseOrdersComponent;
  let fixture: ComponentFixture<PreviouseOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviouseOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
