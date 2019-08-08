import { Component, OnInit } from '@angular/core';
import { HistoricEvent } from './api/historic-event.model';
import { BaseHttpService } from './services/base-http.service';
import { FilterData } from './api/filter-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  events: Array<HistoricEvent> = new Array<HistoricEvent>();
  filter: FilterData = new FilterData();
  subtitle = '';

  constructor(private httpService: BaseHttpService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getEvents('');
  }
  getEvents(keyWord: string) {
    this.setFilters(keyWord);

    this.httpService.getAll(this.filter)
      .subscribe(list => {
        this.events = [];
        list.value.forEach(event => {
          this.events.push(event);
        });
      });
  }

  private setFilters(keyWord: string) {
    const route = window.location.href;
    if (route.indexOf('antigo') >= 0) {
      this.filter.StartYear = -10;
      this.filter.EndYear = 500;
      this.subtitle = 'Igreja Antiga';
    } else if (route.indexOf('medieval') >= 0) {
      this.filter.StartYear = 501;
      this.filter.EndYear = 1500;
      this.subtitle = 'Igreja Medieval';
    } else if (route.indexOf('reforma') >= 0) {
      this.filter.StartYear = 1501;
      this.filter.EndYear = 1800;
      this.subtitle = 'Reforma Protestante';
    } else if (route.indexOf('modernidade') >= 0) {
      this.filter.StartYear = 1801;
      this.filter.EndYear = 2020;
      this.subtitle = 'Modernidade';
    }

    this.filter.KeyWord = keyWord;
  }
}
