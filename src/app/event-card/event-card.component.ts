import { Component, OnInit, Input } from '@angular/core';
import { HistoricEvent } from '../api/historic-event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.less']
})
export class EventCardComponent implements OnInit {

  @Input() historicEvent: HistoricEvent;
  private _index = 0;
  cssClass = 'left';

  @Input()
  set index(i: number) {
    this._index = i;

    if ((i % 2) > 0) {
      this.cssClass = 'right';
    } else {
      this.cssClass = 'left';
    }
  }

  get index():number{
    return this._index;
  }

  constructor() { }

  ngOnInit() {
  }

}
