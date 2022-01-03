import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoPAgoComponent } from './mercado-pago.component';

describe('MercadoPAgoComponent', () => {
  let component: MercadoPAgoComponent;
  let fixture: ComponentFixture<MercadoPAgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoPAgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoPAgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
