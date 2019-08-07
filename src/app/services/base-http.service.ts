import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricEvent } from '../api/historic-event.model';
import { WebApiResponseList } from '../api/webapi-responselist.model';
import { FilterData } from '../api/filter-data.model';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private baseUrl = 'https://churchtimelineapi.azurewebsites.net/odata/HistoricPoints';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(public http: HttpClient) {
    this.http = http;
  }

  public get(id: number): Observable<HistoricEvent> {
    const url = this.baseUrl + `(${id})`;
    return this.http.get<HistoricEvent>(url, this.httpOptions);
  }

  public getAll(filter: FilterData): Observable<WebApiResponseList<HistoricEvent>> {
    filter = filter || new FilterData();

    const url = `${this.baseUrl}?${filter.getOdataFilter()}`;
    return this.http.get<WebApiResponseList<HistoricEvent>>(url, this.httpOptions);
  }
}
