import { Component } from '@angular/core';

import {
  AGES,
  EDUCATION_LEVELS,
  CLB_LEVELS,
  SECOND_CLB_LEVELS,
  CANADIAN_WORK_EXPERIENCE,
  SPOUSE_EDUCATION_LEVELS,
  SPOUSE_CLB_LEVELS,
  SPOUSE_CANADIAN_WORK_EXPERIENCE,
  LanguagePoints,
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
  spouseEducationLevels = SPOUSE_EDUCATION_LEVELS;
  spouseCLBLevels = SPOUSE_CLB_LEVELS;
  spouseWorkExperience = SPOUSE_CANADIAN_WORK_EXPERIENCE;

  score = {
    age: 0,
    education: 0,
    language: 0,
    language2: 0,
    work: 0,
    spouseEducation: 0,
    spouseLanguage: 0,
    spouseWork: 0,
  };

  spouse = false;
  age: PointOption;
  education: PointOption;
  language: LanguagePoints = {};
  secondLanguage = false;
  language2: LanguagePoints = {};
  work: PointOption;
  totalA = 0;
  spouseEducation: PointOption;
  spouseLanguage: LanguagePoints = {};
  spouseWork: PointOption;
  totalB = 0;

  languageTotal(language: LanguagePoints, spouse: ('withSpouse' | 'withoutSpouse'), isActive = true): number {
    return Object.keys(language).reduce((total, ability) => total + (isActive && language[ability][spouse] || 0), 0);
  }

  calc() {
    const spouse = this.spouse ? 'withSpouse' : 'withoutSpouse';

    const language = this.languageTotal(this.language, spouse);

    const language2 = this.languageTotal(this.language2, spouse, this.secondLanguage);

    const spouseLanguage = this.languageTotal(this.spouseLanguage, spouse, this.spouse);

    this.score = {
      age: this.age && this.age[spouse] || 0,
      education: this.education && this.education[spouse] || 0,
      language, language2,
      work: this.work && this.work[spouse] || 0,
      spouseEducation: this.spouseEducation && this.spouseEducation[spouse] || 0,
      spouseLanguage,
      spouseWork: this.spouseWork && this.spouseWork[spouse] || 0,
    };

    this.totalA = this.score.age + this.score.education + this.score.language + this.score.language2 + this.score.work;
    this.totalB = this.score.spouseEducation + this.score.spouseLanguage + this.score.spouseWork;
  }
}
