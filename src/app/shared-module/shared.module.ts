import { NgModule } from "@angular/core";
import { ChartComponent } from "./chart/chart.component";

@NgModule({
    declarations: [
        ChartComponent
    ],
    exports: [
        ChartComponent
    ]
})
export class SharedModule { }