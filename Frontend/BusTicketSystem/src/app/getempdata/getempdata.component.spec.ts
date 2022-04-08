import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetempdataComponent } from './getempdata.component';

describe('GetempdataComponent', () => {
  let component: GetempdataComponent;
  let fixture: ComponentFixture<GetempdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetempdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetempdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
