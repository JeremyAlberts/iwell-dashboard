import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { AppRoutingModule } from "./app/app-routing.module";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(AppRoutingModule, NgApexchartsModule),
  ],
});
