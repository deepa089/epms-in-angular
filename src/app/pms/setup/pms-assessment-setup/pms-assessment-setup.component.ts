import { Component } from '@angular/core';

@Component({
  selector: 'app-pms-assessment-setup',
  imports: [],
  templateUrl: './pms-assessment-setup.component.html',
  styleUrl: './pms-assessment-setup.component.css'
})
export class PmsAssessmentSetupComponent {
  assessmentYearList = [
    { id: 1, year: 2024 },
    { id: 2, year: 2025 },
  ]
}
