import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestViewComponent } from './admin-rest-view.component';

describe('AdminRestViewComponent', () => {
  let component: AdminRestViewComponent;
  let fixture: ComponentFixture<AdminRestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
