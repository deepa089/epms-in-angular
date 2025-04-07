import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PmsDashboardComponent } from "./dashboard/pms-dashboard/pms-dashboard.component";
import { BracitPmsDashboardComponent } from "./dashboard/bracit-pms-dashboard/bracit-pms-dashboard.component";
import { routes } from './app-routing.module';
import { MyPmsComponent } from "./pms/my-pms/my-pms.component";
import { TeamPmsComponent } from "./pms/team-pms/team-pms.component";
import { EmpAssessmentComponent } from "./pms/emp-assessment/emp-assessment.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MyPmsComponent, TeamPmsComponent, EmpAssessmentComponent, RouterOutlet, RouterLink, RouterLink, BracitPmsDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone: true
})

// @NgModule({
//   imports : [RouterModule.forRoot(routes)],
// })
export class AppComponent {
  title = 'epms';
}
