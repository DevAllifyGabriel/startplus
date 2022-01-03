import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenstChannelsComponent } from './componenst-channels.component';

describe('ComponenstChannelsComponent', () => {
  let component: ComponenstChannelsComponent;
  let fixture: ComponentFixture<ComponenstChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenstChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenstChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
