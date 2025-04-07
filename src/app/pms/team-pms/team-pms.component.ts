import { Component } from '@angular/core';
import assessmentData from '../../../../public/assessmentList.json';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-team-pms',
  imports: [RouterLink],
  templateUrl: './team-pms.component.html',
  styleUrl: './team-pms.component.css'
})
export class TeamPmsComponent {
constructor(private router : Router){}

  assessmentList = assessmentData ;
  assessAreaId = 0 ;
  getAssessmentAreaCount(areaId : number){
    this.assessAreaId = areaId ;
     var assessmentAreaCount = this.assessmentList.filter(item => item.assessmentAreaId == areaId).length
     return assessmentAreaCount
  }

  empAssessmentDetails(empId : number){
    console.log('i mhere');
    this.router.navigate(['/assessments', empId]) ;

  }

}
