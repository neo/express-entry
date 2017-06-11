import { Component } from '@angular/core';

import {
  AGES,
  EDUCATION_LEVELS,
  PointOption
} from './points';

@Component({
  selector: 'ee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ages = AGES;
  educationLevels = EDUCATION_LEVELS;

  score = {
    age: 0,
    educationLevel: 0,
  };

  spouse = false;
  age: PointOption;
  educationLevel: PointOption;

  calc() {
    const spouse = this.spouse ? 'withSpouse' : 'withoutSpouse';
    this.score = {
      age: this.age && this.age[spouse] || 0,
      educationLevel: this.educationLevel && this.educationLevel[spouse] || 0,
    };
  }
}
