import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { LANGUAGE_ABILITIES, PointOption, LanguagePoints } from '../points';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LanguageComponent),
    multi: true
  }],
  selector: 'ee-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements ControlValueAccessor {

  @Input() levels: Array<PointOption>;
  @Output() change = new EventEmitter<LanguagePoints>();

  abilities = LANGUAGE_ABILITIES;
  language: LanguagePoints = {};
  onChange: any;
  onTouched: any;
  touched = false;

  writeValue(language: LanguagePoints): void {
    if (language) {
      this.language = language;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  calc() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }

    this.onChange(this.language);
    this.change.emit(this.language);
  }

}
