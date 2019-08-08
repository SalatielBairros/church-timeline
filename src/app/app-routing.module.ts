import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'timeline/completa', component: TimelineComponent },
  { path: 'timeline/antigo', component: TimelineComponent },
  { path: 'timeline/medieval', component: TimelineComponent },
  { path: 'timeline/reforma', component: TimelineComponent },
  { path: 'timeline/modernidade', component: TimelineComponent },
  { path: 'referencias', component: ReferencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
