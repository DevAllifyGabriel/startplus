import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstNavbarComponent } from './componenst-navbar.component';

describe('ComponenstNavbarComponent', () => {
  let component: ComponenstNavbarComponent;
  let fixture: ComponentFixture<ComponenstNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
