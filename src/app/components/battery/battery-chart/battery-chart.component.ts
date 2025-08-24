import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTooltip,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from "ng-apexcharts";
import { TelemetrySeries } from "src/app/models/telemetry-series.model";
import { Timeframe } from "src/app/models/timeframe.enum";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  tooltip?: ApexTooltip;
};

@Component({
  selector: "app-battery-chart",
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: "./battery-chart.component.html",
  styleUrls: ["./battery-chart.component.scss"],
})
export class BatteryChartComponent implements OnChanges {
  @ViewChild("chart") chart!: ChartComponent;
  @Input() telemetry: TelemetrySeries | undefined;
  @Output() timeframeChange = new EventEmitter<Timeframe>();
  chartOptions: Partial<ChartOptions> = {};
  Timeframe = Timeframe;

  changeTimeframe(tf: Timeframe) {
    this.telemetry = undefined;
    this.timeframeChange.emit(tf);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.telemetry?.series?.length) {
      this.chartOptions.series = [];
      return;
    }

    this.chartOptions = {
      series: this.telemetry.series,
      chart: { type: "line", height: 350 },
      xaxis: { type: "datetime" },
      tooltip: { x: { format: "dd MMM yyyy HH:mm" } },
    };
  }
}
