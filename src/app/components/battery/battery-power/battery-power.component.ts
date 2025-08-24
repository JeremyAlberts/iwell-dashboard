import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-battery-power",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./battery-power.component.html",
  styleUrls: ["./battery-power.component.scss"],
})
export class BatteryPowerComponent {
  @Input() batteryPowerKw: number | undefined;
}
