import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstPlansComponent } from './componenst-plans.component';

describe('ComponenstPlansComponent', () => {
  let component: ComponenstPlansComponent;
  let fixture: ComponentFixture<ComponenstPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
