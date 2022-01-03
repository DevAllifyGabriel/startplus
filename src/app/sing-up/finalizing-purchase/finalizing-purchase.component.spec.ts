import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizingPurchaseComponent } from './finalizing-purchase.component';

describe('FinalizingPurchaseComponent', () => {
  let component: FinalizingPurchaseComponent;
  let fixture: ComponentFixture<FinalizingPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizingPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizingPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
