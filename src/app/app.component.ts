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
  selectedMenu = ['selected', '', '', '', '', ''];

  constructor(private router: Router) {

  }

  navigate(route: string, index: number) {
    this.selectElement(index);
    this.router.navigate([route]);
  }

  private selectElement(index: number) {
    for (let i = 0; i < this.selectedMenu.length; i++) {
      this.selectedMenu[i] = '';
    }

    this.selectedMenu[index] = 'selected';
    console.log(this.selectedMenu);
  }
}
