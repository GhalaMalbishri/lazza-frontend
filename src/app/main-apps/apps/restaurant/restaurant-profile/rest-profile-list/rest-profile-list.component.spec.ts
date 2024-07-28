import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestProfileListComponent } from './rest-profile-list.component';

describe('RestProfileListComponent', () => {
  let component: RestProfileListComponent;
  let fixture: ComponentFixture<RestProfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestProfileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
