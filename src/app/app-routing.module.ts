import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { JobsComponent } from './jobs/jobs.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { StationsComponent } from './stations/stations.component';
import { Router } from '@angular/router';

const routes: Routes = [
{path:'status', component:StatusComponent},
{path:'jobs',component:JobsComponent},
{path:'reports',component:ReportsComponent},
{path:'settings',component:SettingsComponent},
{path:'stations',component:StationsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
