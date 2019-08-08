import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'timeline/antigo', component: AppComponent },
  { path: 'timeline/medieval', component: AppComponent },
  { path: 'timeline/reforma', component: AppComponent },
  { path: 'timeline/modernidade', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
