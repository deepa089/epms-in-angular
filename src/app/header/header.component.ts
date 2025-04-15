import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSubMenu = false;


  constructor(private router : Router){}
  toggleSubMenu() {
    console.log(this.showSubMenu);
    this.showSubMenu = !this.showSubMenu;
  }

  navigateTo(path: string) {
    console.log(this.showSubMenu);
    this.showSubMenu = false; // Hide submenu after navigation
    this.router.navigate([path]);
    
  }

}
