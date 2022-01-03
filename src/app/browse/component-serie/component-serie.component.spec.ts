import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSerieComponent } from './component-serie.component';

describe('ComponentSerieComponent', () => {
  let component: ComponentSerieComponent;
  let fixture: ComponentFixture<ComponentSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
