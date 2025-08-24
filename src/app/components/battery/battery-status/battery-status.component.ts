import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-battery-status",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./battery-status.component.html",
  styleUrls: ["./battery-status.component.scss"],
})
export class BatteryStatusComponent {
  @Input() availableDischargePowerKw: number | undefined;
}
