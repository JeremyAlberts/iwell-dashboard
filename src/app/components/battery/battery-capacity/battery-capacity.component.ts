import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-battery-capacity",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./battery-capacity.component.html",
  styleUrls: ["./battery-capacity.component.scss"],
})
export class BatteryCapacityComponent {
  @Input() chargeCapacityRemainingKwh: number | undefined;
  @Input() dischargeCapacityRemainingKwh: number | undefined;
}
