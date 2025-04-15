import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pms-group-setup',
  imports: [CommonModule],
  templateUrl: './pms-group-setup.component.html',
  styleUrl: './pms-group-setup.component.css'
})
export class PmsGroupSetupComponent {

  assessmentYearList = [
    {id : 1, year : 2024},
    {id : 2, year : 2025},
  ]

  items = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
  ];

}
