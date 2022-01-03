import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStartPlusComponent } from './main-start-plus.component';

describe('MainStartPlusComponent', () => {
  let component: MainStartPlusComponent;
  let fixture: ComponentFixture<MainStartPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStartPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStartPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
