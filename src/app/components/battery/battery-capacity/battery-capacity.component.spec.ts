import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryCapacityComponent } from './battery-capacity.component';

describe('BatteryCapacityComponent', () => {
  let component: BatteryCapacityComponent;
  let fixture: ComponentFixture<BatteryCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BatteryCapacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
