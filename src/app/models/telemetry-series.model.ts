export interface TelemetrySeries {
  series: Array<{
    name: string;
    data: [number, number][];
  }>;
}
