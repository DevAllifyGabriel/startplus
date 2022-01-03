import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPasscodeComponent } from './enter-passcode.component';

describe('EnterPasscodeComponent', () => {
  let component: EnterPasscodeComponent;
  let fixture: ComponentFixture<EnterPasscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPasscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
