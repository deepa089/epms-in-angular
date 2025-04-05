import { NgModule } from "@angular/core";
import { AppRouterModule, routes } from "./app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    imports : [RouterModule.forRoot(routes)],
})
export class AppModule { }