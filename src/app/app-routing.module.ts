import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TeamPmsComponent } from "./pms/team-pms/team-pms.component";
import { MyPmsComponent } from "./pms/my-pms/my-pms.component";
import { NgModule } from "@angular/core";

export const routes : Routes = [
    {path : '', component : AppComponent},
    {path : 'mypms', component : MyPmsComponent},
    {path : 'teamPms', component : TeamPmsComponent},
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRouterModule{}