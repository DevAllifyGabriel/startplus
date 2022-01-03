import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstFilmsComponent } from './componenst-films.component';

describe('ComponenstFilmsComponent', () => {
  let component: ComponenstFilmsComponent;
  let fixture: ComponentFixture<ComponenstFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
