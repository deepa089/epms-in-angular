import { Component } from '@angular/core';
import assessmentData from '../../../../public/assessmentList.json';


@Component({
  selector: 'app-team-pms',
  imports: [],
  templateUrl: './team-pms.component.html',
  styleUrl: './team-pms.component.css'
})
export class TeamPmsComponent {
  assessmentList = assessmentData ;
  assessAreaId = 0 ;
  getAssessmentAreaCount(areaId : number){
    this.assessAreaId = areaId ;
     var assessmentAreaCount = this.assessmentList.filter(item => item.assessmentAreaId == areaId).length
     return assessmentAreaCount
  }

}
