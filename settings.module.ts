import { CatTogglebuttonModule } from '@app/shared';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DialogModule,
  TabViewModule,
  SelectButtonModule,
  DropdownModule,
  RadioButtonModule,
  CheckboxModule,
  OverlayPanelModule,
  CalendarModule,
  AccordionModule,
  AutoCompleteModule,
  ProgressBarModule,
} from 'primeng/primeng';

import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { LoggingSettingsComponent } from './logging-settings/logging-settings.component';
import { LoggingSettingsModule } from './logging-settings/logging-settings.module';
import { SettingsPreferenceService } from './settings-preference.service';
import { TabDirective } from './tab.directive';

/**
 * @description Independent module to handle User Settings.
 * @author Rajesh
 * @export
 * @class SettingsModule
 */
@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    SelectButtonModule,
    TabViewModule,
    FormsModule,
    CheckboxModule,
    OverlayPanelModule,
    CalendarModule,
    CheckboxModule,
    AccordionModule,
    AutoCompleteModule,
    ProgressBarModule,
    CatTogglebuttonModule,
    LoggingSettingsModule,

  ],
  declarations: [
    SettingsComponent,
    TabDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SettingsComponent],
  providers: [
    SettingsService,
    SettingsPreferenceService
  ],
  entryComponents: [
    LoggingSettingsComponent,

  ]
})
export class SettingsModule { }
