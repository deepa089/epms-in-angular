import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TeamPmsComponent } from "./pms/team-pms/team-pms.component";
import { MyPmsComponent } from "./pms/my-pms/my-pms.component";
import { NgModule } from "@angular/core";
import { EmpAssessmentComponent } from "./pms/emp-assessment/emp-assessment.component";
import { BracitPmsDashboardComponent } from "./dashboard/bracit-pms-dashboard/bracit-pms-dashboard.component";
import { PmsGroupSetupComponent } from "./pms/setup/pms-group-setup/pms-group-setup.component";
import { PmsAssessmentSetupComponent } from "./pms/setup/pms-assessment-setup/pms-assessment-setup.component";

export const routes : Routes = [
    {path : '', redirectTo : '', pathMatch : 'full'},
    {path : '', component : BracitPmsDashboardComponent},
    {path : 'mypms', component : MyPmsComponent},
    {path : 'teamPms', component : TeamPmsComponent},
    {path : 'assessments/:id', component : EmpAssessmentComponent},
    {path : 'pmsGroupSetup', component : PmsGroupSetupComponent},
    {path : 'assessmentSetup', component : PmsAssessmentSetupComponent},
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRouterModule{}