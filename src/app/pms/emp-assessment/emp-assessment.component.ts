import { Component } from '@angular/core';
import empWiseAssessmentList from '../../../../public/EmpWiseAssessmentList.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-assessment',
  imports: [CommonModule],
  templateUrl: './emp-assessment.component.html',
  styleUrl: './emp-assessment.component.css'
})
export class EmpAssessmentComponent {

  assessmentList = empWiseAssessmentList ;
  assessAreaId = 0 ;


  getAssessmentAreaCount(areaId : number){
    this.assessAreaId = areaId ;
     var assessmentAreaCount = this.assessmentList.filter(item => item.assessmentAreaId == areaId).length
     return assessmentAreaCount
  }

}
