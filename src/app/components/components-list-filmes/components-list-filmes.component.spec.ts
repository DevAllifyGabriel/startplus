import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsListFilmesComponent } from './components-list-filmes.component';

describe('ComponentsListFilmesComponent', () => {
  let component: ComponentsListFilmesComponent;
  let fixture: ComponentFixture<ComponentsListFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsListFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsListFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
