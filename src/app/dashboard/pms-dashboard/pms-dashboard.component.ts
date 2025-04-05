import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pms-dashboard',
  imports: [CommonModule],
  templateUrl: './pms-dashboard.component.html',
  styleUrl: './pms-dashboard.component.css'
})
export class PmsDashboardComponent {

  visibleDivId : string | null = null
  isVisible = false;
  toggle(divId : string) {
    this.visibleDivId = divId
    // if(){

    // }
    this.isVisible = !this.isVisible;
  }

  navigateToRoute(){
    // this.isVisible = !this.isVisible;
    console.log(" i m here");
  }
}
