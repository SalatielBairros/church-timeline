import { Component, OnInit } from '@angular/core';
import { HistoricEvent } from './api/historic-event.model';
import { BaseHttpService } from './services/base-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  events: Array<HistoricEvent> = new Array<HistoricEvent>();

  constructor(private httpService: BaseHttpService) {

  }

  ngOnInit(): void {
    this.httpService.getAll()
      .subscribe(list => {
        list.value.forEach(event => {
          this.events.push(event);
        });
      });
  }
}
