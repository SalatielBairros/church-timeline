import { Component, OnInit } from '@angular/core';
import { HistoricEvent } from './api/historic-event.model';
import { BaseHttpService } from './services/base-http.service';
import { FilterData } from './api/filter-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  events: Array<HistoricEvent> = new Array<HistoricEvent>();
  filter: FilterData = new FilterData();

  constructor(private httpService: BaseHttpService) {

  }

  ngOnInit(): void {
    this.getEvents();
  }

  setFilters(keyWord: string, start: number, end: number) {
    this.filter.KeyWord = keyWord;
    this.filter.StartYear = start;
    this.filter.EndYear = end;

    this.getEvents();
  }

  getEvents() {
    this.httpService.getAll(this.filter)
      .subscribe(list => {
        this.events = [];
        list.value.forEach(event => {
          this.events.push(event);
        });
      });
  }
}
