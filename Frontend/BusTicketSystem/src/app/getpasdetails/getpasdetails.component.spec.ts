import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpasdetailsComponent } from './getpasdetails.component';

describe('GetpasdetailsComponent', () => {
  let component: GetpasdetailsComponent;
  let fixture: ComponentFixture<GetpasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpasdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
