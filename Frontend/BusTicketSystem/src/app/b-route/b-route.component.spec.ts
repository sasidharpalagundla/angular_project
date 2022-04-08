import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRouteComponent } from './b-route.component';

describe('BRouteComponent', () => {
  let component: BRouteComponent;
  let fixture: ComponentFixture<BRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
