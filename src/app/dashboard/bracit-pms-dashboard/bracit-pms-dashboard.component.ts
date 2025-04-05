import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bracit-pms-dashboard',
  imports: [CommonModule],
  templateUrl: './bracit-pms-dashboard.component.html',
  styleUrl: './bracit-pms-dashboard.component.css'
})
export class BracitPmsDashboardComponent {
constructor(private router : Router){}

  visibleDivId : string | null = null
  isVisible = false;
  toggle(divId : string) {
    this.visibleDivId = divId
    // if(){

    // }
    this.isVisible = !this.isVisible;
  }

  navigateToRoute(urlLink : string){
    // this.isVisible = !this.isVisible;
    console.log(urlLink);
    this.router.navigate(['/mypms']);
  }
}
