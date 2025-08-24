import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyiwellService } from "src/app/services/myiwell.service";
import { BatteryStatusComponent } from "../battery-status/battery-status.component";
import { BatteryPowerComponent } from "../battery-power/battery-power.component";
import { BatteryStatus } from "src/app/models/battery-status.model";
import { BatteryCapacityComponent } from "../battery-capacity/battery-capacity.component";
import { TelemetrySeries } from "src/app/models/telemetry-series.model";
import { BatteryChartComponent } from "../battery-chart/battery-chart.component";
import { Timeframe } from "src/app/models/timeframe.enum";

@Component({
  selector: "app-battery-info",
  standalone: true,
  imports: [
    CommonModule,
    BatteryStatusComponent,
    BatteryPowerComponent,
    BatteryCapacityComponent,
    BatteryChartComponent,
  ],
  templateUrl: "./battery-info.component.html",
  styleUrls: ["./battery-info.component.scss"],
})
export class BatteryInfoComponent implements OnInit {
  batteryStatus: BatteryStatus | undefined;
  batteryTelemetry: TelemetrySeries | undefined;
  timeframe: Timeframe = Timeframe.Hour;

  constructor(private myiwellService: MyiwellService) {}

  loadTelemetry() {
    this.myiwellService
      .getBatteryTelemetry(this.timeframe)
      .subscribe((data) => {
        this.batteryTelemetry = this.filterTelemetry(data);
      });
  }

  onTimeframeChange(newTimeframe: Timeframe) {
    this.timeframe = newTimeframe;
    this.loadTelemetry();
  }

  private filterTelemetry(data: TelemetrySeries): TelemetrySeries {
    const order = ["BatteryPowerW", "GridPowerW"];

    return {
      series: data.series
        .filter((s) => order.includes(s.name))
        .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name)) // ensure order
        .map((s) => ({
          name: s.name,
          data: s.data.map(
            ([ts, val]) => [ts, parseFloat(val.toFixed(4))] as [number, number]
          ),
        })),
    };
  }

  ngOnInit(): void {
    this.myiwellService.getBatteryStatus().subscribe({
      next: (data: BatteryStatus) => {
        this.batteryStatus = data;
        console.log("Battery status:", data);
      },
      error: (err: any) => {
        console.error("Error fetching battery status:", err);
      },
    });

    this.myiwellService.getBatteryTelemetry(this.timeframe).subscribe({
      next: (data: TelemetrySeries) => {
        this.batteryTelemetry = this.filterTelemetry(data);
        console.log("Battery status:", data);
      },
      error: (err: any) => {
        console.error("Error fetching battery status:", err);
      },
    });
  }
}
