import { environment } from '@env/environment';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StompService } from 'ng2-stomp-service';
import { GrowlModule, DialogModule, ProgressBarModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { InterruptModule } from './shared';
import { MenuModule } from '@app/menu/menu.module';
import { HeaderModule } from '@app/header/header.module';
import { SharedModule } from '@app/shared/shared.module';
import {
  SettingsModule
} from './modules';
import { ToolboxdashboardModule } from '@app/TT-dashboard/toolboxdashboard/toolboxdashboard.module';
import { appReducers } from '@app/app.reducers';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HeaderModule,
    MenuModule,
    DialogModule,
    ProgressBarModule,
    GrowlModule,
    SettingsModule,
    StoreModule.provideStore(appReducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    InterruptModule,
    ToolboxdashboardModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    StompService,
    Title,
      ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
