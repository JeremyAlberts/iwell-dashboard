# process and decision making

### 1. Project Overview

This project is an Angular application that displays battery status and telemetry data.

Key features:

- Shows battery status, capacity and power.
- Shows a chart that allows for switching between timeframes (hour, day, month).

### 2. File Structure

I seperated the files into several folders to keep the structure clean:

**services:** This folder contains all Angular services that handle API communication and business logic.

**components:** Contains all Angular components, further divided into folders to separate functionalilty, for example the battery folder.

**models:** Holds TypeScript interfaces and enums.

**environments:** Stores environment configuration files.

### 3. Architecture Decisions

#### Container / Presentational Components:

I have chosen to make a single container component `BatteryInfoComponent` to be responsible for data fetching and business logic. The rest of the components are presentational and receive their data using `@Input`, showing the UI.

Another option would have been for each component to fetch their own data and show it, the benefits of this are that the component can be used wherever without relying on parent feeding it data. However this can result in duplicate API calls as was the case here.

Instead of each component calling the API and pulling what they need from the result, the parent calls the API once and passes the specific data to the component.

#### Service Usage:

`MyiwellService` handles all API communication, keeping components clean and testable.

### 4. Code Decisions & Patterns

#### Environment Variables

- Secrets like deviceId and apiKey are stored in src/environments/environment.ts and replaced for production builds.
- .gitignore ensures sensitive values are never committed.
- Template file environment.example.ts is provided for development setup.

#### Telemetry Data Handling

- Data is filtered to show only "BatteryPowerW" and "GridPowerW" series.
- Data points are rounded to 4 decimals.
- Series are sorted to maintain consistent chart order.

#### Parent-Child Communication

- `BatteryChartComponent` triggers the timeframeChange event to notify the `BatteryInfoComponent` to fetch new data.

- `BatteryInfoComponent` handles the API calls, updates the data, and passes it down.

### 5. Future Improvements

- **Auto-update for the chart**
  Right now the telemetry data is only fetched when the user explicitly changes the timeframe. A polling mechanism could be added to automatically refresh the chart at a set interval.

- **Generic status component**
  Since the battery status format is always the same, a simple, generic status component could be created. This would reduce code duplication and make it easier to reuse it across the app.

- **File structure**
  If the project grows bigger with more components it would be a good idea to separate the components further and add for example a `shared` folder or if logic is used in multiple places putting these in a `utilities` folder could help.

- **Update angular version**
  Updating the project to a newer version allows for signals to be used which are nice for state management.

- **Improving chart**
  Now the chart only shows two categories, it could be nice to add a feature to check/uncheck what categories you want to be shown. Also put the chart options outside of the component so that these can be changed in other instances
