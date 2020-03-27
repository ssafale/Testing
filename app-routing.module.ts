import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { ToolboxdashboardComponent } from '@app/TT-dashboard/toolboxdashboard/toolboxdashboard.component';
import { BootstrapAppGuard } from './core';
import {
  SettingsComponent
} from './modules';
const NGSSRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: ToolboxdashboardComponent, canActivate: [] },
  { path: 'settings', component: SettingsComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(NGSSRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



