import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css']
})
export class DatepickerMomentExample {
  // Datepicker takes `Moment` objects instead of `Date` objects.
  // date = new FormControl();
  // Datetimepicker.
  // datetime = new FormControl();
  group = new FormGroup({
    datetimeCtrl: new FormControl('')
  });
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
