import { Component, OnInit } from "@angular/core";
import { BatteryInfoComponent } from "./components/battery/battery-info/battery-info.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [BatteryInfoComponent],
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "iwell dashboard";
}
