import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassawordComponent } from './passaword.component';

describe('PassawordComponent', () => {
  let component: PassawordComponent;
  let fixture: ComponentFixture<PassawordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassawordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassawordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
