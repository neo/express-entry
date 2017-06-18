import { Component } from '@angular/core';

import {
  AGES,
  EDUCATION_LEVELS,
  CLB_LEVELS,
  SECOND_CLB_LEVELS,
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
  clbLevels = CLB_LEVELS;
  clbLevels2 = SECOND_CLB_LEVELS;

  score = {
    age: 0,
    educationLevel: 0,
    language: 0,
    language2: 0,
  };

  spouse = false;
  age: PointOption;
  educationLevel: PointOption;
  reading: PointOption;
  writing: PointOption;
  listening: PointOption;
  speaking: PointOption;
  secondLanguage = false;
  reading2: PointOption;
  writing2: PointOption;
  listening2: PointOption;
  speaking2: PointOption;

  calc() {
    const spouse = this.spouse ? 'withSpouse' : 'withoutSpouse';

    const language = [this.reading, this.writing, this.listening, this.speaking].reduce((total, ability) => {
      return total + (ability && ability[spouse] || 0);
    }, 0);

    const language2 = [this.reading2, this.writing2, this.listening2, this.speaking2].reduce((total, ability) => {
      return total + (this.secondLanguage && ability && ability[spouse] || 0);
    }, 0);

    this.score = {
      age: this.age && this.age[spouse] || 0,
      educationLevel: this.educationLevel && this.educationLevel[spouse] || 0,
      language, language2,
    };
  }
}
