import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../core/services/api-config.service';
import { Observable } from 'rxjs';
import { AssessmentYear } from '../model/assessment-year';

@Injectable({
  providedIn: 'root'
})
export class PmsService {

  constructor(private httpClient : HttpClient, private apiConfigService : ApiConfigService) { }

  getAssessmentYearList() : Observable<AssessmentYear[]>{
    return this.httpClient.get<AssessmentYear[]>(`${this.apiConfigService.baseUrl}/users`);
  }



}
