import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpageComponent } from './dpage.component';

describe('DpageComponent', () => {
  let component: DpageComponent;
  let fixture: ComponentFixture<DpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
