import { Component, OnInit } from '@angular/core';
import { HistoricEvent } from './api/historic-event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  events: Array<HistoricEvent> = new Array<HistoricEvent>();

  ngOnInit(): void {
    this.events.push(<HistoricEvent>{
      description: "O nascimento de Jesus foi, inicialmente, contado na data errada.",
      title: "Nascimento de Jesus",
      year: -4,
      tag: "Evento",
      referenceLink: "http://google.com.br"
    });
  }
}
