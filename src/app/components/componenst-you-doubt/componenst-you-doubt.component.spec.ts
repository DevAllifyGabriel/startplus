import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstYouDoubtComponent } from './componenst-you-doubt.component';

describe('ComponenstYouDoubtComponent', () => {
  let component: ComponenstYouDoubtComponent;
  let fixture: ComponentFixture<ComponenstYouDoubtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstYouDoubtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstYouDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
