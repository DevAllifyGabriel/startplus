import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapePlusComponent } from './rodape-plus.component';

describe('RodapePlusComponent', () => {
  let component: RodapePlusComponent;
  let fixture: ComponentFixture<RodapePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapePlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
