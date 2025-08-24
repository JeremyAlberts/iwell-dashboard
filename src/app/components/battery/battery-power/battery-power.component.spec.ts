import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryPowerComponent } from './battery-power.component';

describe('BatteryPowerComponent', () => {
  let component: BatteryPowerComponent;
  let fixture: ComponentFixture<BatteryPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BatteryPowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
