import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TeamPmsComponent } from "./pms/team-pms/team-pms.component";
import { MyPmsComponent } from "./pms/my-pms/my-pms.component";
import { NgModule } from "@angular/core";
import { EmpAssessmentComponent } from "./pms/emp-assessment/emp-assessment.component";
import { BracitPmsDashboardComponent } from "./dashboard/bracit-pms-dashboard/bracit-pms-dashboard.component";

export const routes : Routes = [
    {path : '', redirectTo : '', pathMatch : 'full'},
    {path : '', component : BracitPmsDashboardComponent},
    {path : 'mypms', component : MyPmsComponent},
    {path : 'teamPms', component : TeamPmsComponent},
    {path : 'assessments/:id', component : EmpAssessmentComponent},
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRouterModule{}