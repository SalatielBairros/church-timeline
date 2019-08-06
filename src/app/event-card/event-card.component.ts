import { Component, OnInit, Input } from '@angular/core';
import { HistoricEvent } from '../api/historic-event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.less']
})
export class EventCardComponent implements OnInit {

  @Input() historicEvent: HistoricEvent;

  constructor() { }

  ngOnInit() {
  }

}
