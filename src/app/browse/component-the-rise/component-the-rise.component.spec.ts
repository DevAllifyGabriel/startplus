import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTheRiseComponent } from './component-the-rise.component';

describe('ComponentTheRiseComponent', () => {
  let component: ComponentTheRiseComponent;
  let fixture: ComponentFixture<ComponentTheRiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTheRiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTheRiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
