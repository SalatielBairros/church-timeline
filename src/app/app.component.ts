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
      description: "Teste de descrição de evento lala la alsdalsd asd as",
      title: "Título do evento como eu quero",
      year: -4,
      tag: "Evento",
      referenceLink: "http://google.com.br"
    });

    this.events.push(<HistoricEvent>{
      description: "Teste de descrição de evento lala la alsdalsd asd as",
      title: "Título do evento como eu quero",
      year: 54,
      tag: "Evento",
      referenceLink: "http://google.com.br"
    });
  }
}
