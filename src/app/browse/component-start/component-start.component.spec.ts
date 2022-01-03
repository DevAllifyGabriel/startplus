import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStartComponent } from './component-start.component';

describe('ComponentStartComponent', () => {
  let component: ComponentStartComponent;
  let fixture: ComponentFixture<ComponentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
