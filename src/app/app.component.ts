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
export class AppComponent {
  constructor(private router: Router) {

  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
