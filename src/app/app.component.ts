import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PmsDashboardComponent } from "./dashboard/pms-dashboard/pms-dashboard.component";
import { BracitPmsDashboardComponent } from "./dashboard/bracit-pms-dashboard/bracit-pms-dashboard.component";
import { routes } from './app-routing.module';
import { MyPmsComponent } from "./pms/my-pms/my-pms.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MyPmsComponent],
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
