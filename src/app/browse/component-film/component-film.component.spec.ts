import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFilmComponent } from './component-film.component';

describe('ComponentFilmComponent', () => {
  let component: ComponentFilmComponent;
  let fixture: ComponentFixture<ComponentFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
