import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBrowseNavabarComponent } from './components-browse-navabar.component';

describe('ComponentsBrowseNavabarComponent', () => {
  let component: ComponentsBrowseNavabarComponent;
  let fixture: ComponentFixture<ComponentsBrowseNavabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsBrowseNavabarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBrowseNavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
