import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BatteryStatus } from "../models/battery-status.model";
import { Observable, of } from "rxjs";
import { TelemetrySeries } from "../models/telemetry-series.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MyiwellService {
  private baseUrl = "/myiwell/api/v1/batteries/";
  private deviceId = environment.myiwell.deviceId;
  private apiKey = environment.myiwell.apiKey;
  private headers = new HttpHeaders({
    "x-api-key": this.apiKey,
  });

  constructor(private http: HttpClient) {}

  getBatteryStatus(): Observable<BatteryStatus> {
    const url = `${this.baseUrl}${this.deviceId}/status`;

    return this.http.get<BatteryStatus>(url, { headers: this.headers });
  }

  getBatteryTelemetry(offsetMinutes: number): Observable<TelemetrySeries> {
    const url = `${this.baseUrl}${this.deviceId}/telemetry?OffsetMinutes=${offsetMinutes}`;

    return this.http.get<TelemetrySeries>(url, { headers: this.headers });
  }
}
