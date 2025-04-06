import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import assessmentData from '../../../../public/assessmentList.json';

@Component({
  selector: 'app-my-pms',
  imports: [CommonModule],
  templateUrl: './my-pms.component.html',
  styleUrl: './my-pms.component.css'
})
export class MyPmsComponent {

  /* assessmentList = [
    {
      "assessmentId": 1,
      "assessmentAreaId": 1,
      "assessmentArea": "Functional/Technical Proficiency",
      "weight": 25,
      "assessmentPoint": "How often do you successfully complete assigned tasks without requiring rework? (Rarely = 1, Always = 5)"
    },
    {
      "assessmentId": 2,
      "assessmentAreaId": 1,
      "assessmentArea": "Functional/Technical Proficiency",
      "weight": 25,
      "assessmentPoint": "How many new tools, technologies, or methodologies have you learned and applied in your role in the last 12 months? (None = 0, 3 = 3, 5+ = 5)"
    },
    {
      "assessmentId": 3,
      "assessmentAreaId": 1,
      "assessmentArea": "Functional/Technical Proficiency",
      "weight": 25,
      "assessmentPoint": "How frequently do you meet or exceed the expected technical/functional standards of your role? (Rarely = 1, Always = 5)"
    },
    {
      "assessmentId": 4,
      "assessmentAreaId": 2,
      "assessmentArea": "Problem-Solving and Initiative",
      "weight": 20,
      "assessmentPoint": "How many process or task improvements have you suggested in the last quarter? (None = 0, 5 = 5+)"
    },
    {
      "assessmentId": 5,
      "assessmentAreaId": 2,
      "assessmentArea": "Problem-Solving and Initiative",
      "weight": 20,
      "assessmentPoint": "How often do you independently resolve issues before escalation is required? (Rarely = 1, Always = 5)"
    },
    {
      "assessmentId": 6,
      "assessmentAreaId": 2,
      "assessmentArea": "Problem-Solving and Initiative",
      "weight": 20,
      "assessmentPoint": "How many times have you taken the lead on a task or project without being asked in the last year? (None = 1, 1-2 = 3, 3+ = 5)"
    }
  ] ; */


    assessmentList = assessmentData ;

  // constructor(){
  //   console.log('i m herdfsdfe');
  // }
  // onInit(){
  //   console.log('i m here');

  // }

  assessAreaId = 0 ;
  getAssessmentAreaCount(areaId : number){
    this.assessAreaId = areaId ;
     var assessmentAreaCount = this.assessmentList.filter(item => item.assessmentAreaId == areaId).length
     return assessmentAreaCount
  }
}
