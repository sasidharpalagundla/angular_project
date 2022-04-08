import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusDetailsComponent } from './get-bus-details.component';

describe('GetBusDetailsComponent', () => {
  let component: GetBusDetailsComponent;
  let fixture: ComponentFixture<GetBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
