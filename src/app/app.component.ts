import { Component } from '@angular/core';

import {
  AGES,
  EDUCATION_LEVELS,
  CLB_LEVELS,
  SECOND_CLB_LEVELS,
  CANADIAN_WORK_EXPERIENCE,
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
  canadianWorkExperience = CANADIAN_WORK_EXPERIENCE;

  score = {
    age: 0,
    education: 0,
    language: 0,
    language2: 0,
    work: 0,
  };

  spouse = false;
  age: PointOption;
  education: PointOption;
  reading: PointOption;
  writing: PointOption;
  listening: PointOption;
  speaking: PointOption;
  secondLanguage = false;
  reading2: PointOption;
  writing2: PointOption;
  listening2: PointOption;
  speaking2: PointOption;
  work: PointOption;
  totalA = 0;

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
      education: this.education && this.education[spouse] || 0,
      language, language2,
      work: this.work && this.work[spouse] || 0,
    };

    this.totalA = this.score.age + this.score.education + this.score.language + this.score.language2 + this.score.work;
  }
}
