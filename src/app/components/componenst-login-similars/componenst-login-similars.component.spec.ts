import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstLoginSimilarsComponent } from './componenst-login-similars.component';

describe('ComponenstLoginSimilarsComponent', () => {
  let component: ComponenstLoginSimilarsComponent;
  let fixture: ComponentFixture<ComponenstLoginSimilarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstLoginSimilarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstLoginSimilarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
