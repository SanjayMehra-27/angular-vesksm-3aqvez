import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS,
MatDatepickerModule, MatInputModule,MatFormFieldModule} from '@angular/material';
import {MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';

import {DatepickerMomentExample} from './app/datepicker-moment-example';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    // DemoMaterialModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    /** this module must be imported or this error is shown:
     * MatDatetimepicker: No provider found for DateAdapter. You must import one of the following modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a custom implementation.
     */
    MatMomentDatetimeModule,
    MatDatetimepickerModule,
  ],
  entryComponents: [DatepickerMomentExample],
  declarations: [DatepickerMomentExample],
  bootstrap: [DatepickerMomentExample],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    // Comment out the line below to turn off UTC:
    // actually it does not work with the DatetimepickerModule since it uses the MatMomentDateModule
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    // These should be provided by MatMomentDateModule, but it has never worked in stackblitz for some reason:
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */