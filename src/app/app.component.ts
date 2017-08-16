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
  FOREIGN_WORK_EXPERIENCE,
  LANGUAGE_ABILITIES,
  SECTION_C_POINTS,
  SECTION_D_POINTS,
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
  foreignWorkExperience = FOREIGN_WORK_EXPERIENCE;
  additionalPoints = Object.keys(SECTION_D_POINTS);

  score = {
    age: 0,
    education: 0,
    language: 0,
    language2: 0,
    work: 0,
    spouseEducation: 0,
    spouseLanguage: 0,
    spouseWork: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    sectionD: Array(this.additionalPoints.length).fill(0)
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
  foreignWork: string;
  hasCertificateOfQualification = false;
  totalC = 0;
  sectionD: Array<boolean> = [];
  totalD = 0;
  scoreTotal = 0;

  languageTotal(language: LanguagePoints, spouse: ('withSpouse' | 'withoutSpouse'), isActive = true): number {
    return Object.keys(language).reduce((total, ability) => total + (isActive && language[ability][spouse] || 0), 0);
  }

  sectionC(): { c1: number, c2: number, c3: number, c4: number, c5: number } {
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;

    const educationIndex = EDUCATION_LEVELS.indexOf(this.education);
    const isTwoCredentials = educationIndex === EDUCATION_LEVELS.findIndex(level => /two or more/i.test(level.text));
    const isPostSecondary = educationIndex >= EDUCATION_LEVELS.findIndex(level => /one.year/i.test(level.text));

    const CLB9Index = CLB_LEVELS.findIndex(level => /9/.test(level.text));
    const CLB7Index = CLB_LEVELS.findIndex(level => /7/.test(level.text));
    const isAllCLB9 = LANGUAGE_ABILITIES.every(ability => CLB_LEVELS.indexOf(this.language[ability]) >= CLB9Index);
    const isAllCLB7 = LANGUAGE_ABILITIES.every(ability => CLB_LEVELS.indexOf(this.language[ability]) >= CLB7Index);

    const canadianWorkIndex = CANADIAN_WORK_EXPERIENCE.indexOf(this.work);
    const is1Canadian = canadianWorkIndex >= 1;
    const is2Canadian = canadianWorkIndex >= 2;

    const foreignIndex = FOREIGN_WORK_EXPERIENCE.indexOf(this.foreignWork);
    const is1Foreign = foreignIndex === 1;
    const is3Foreign = foreignIndex === 2;

    if (isAllCLB9) {
      if (isTwoCredentials) {
        c1 = SECTION_C_POINTS[2];
      } else if (isPostSecondary) {
        c1 = SECTION_C_POINTS[1];
      }
    } else if (isAllCLB7) {
      if (isTwoCredentials) {
        c1 = SECTION_C_POINTS[1];
      } else if (isPostSecondary) {
        c1 = SECTION_C_POINTS[0];
      }
    }

    if (is2Canadian) {
      if (isTwoCredentials) {
        c2 = SECTION_C_POINTS[2];
      } else if (isPostSecondary) {
        c2 = SECTION_C_POINTS[1];
      }
    } else if (is1Canadian) {
      if (isTwoCredentials) {
        c2 = SECTION_C_POINTS[1];
      } else if (isPostSecondary) {
        c2 = SECTION_C_POINTS[0];
      }
    }

    if (isAllCLB9) {
      if (is3Foreign) {
        c3 = SECTION_C_POINTS[2];
      } else if (is1Foreign) {
        c3 = SECTION_C_POINTS[1];
      }
    } else if (isAllCLB7) {
      if (is3Foreign) {
        c3 = SECTION_C_POINTS[1];
      } else if (is1Foreign) {
        c3 = SECTION_C_POINTS[0];
      }
    }

    if (is2Canadian) {
      if (is3Foreign) {
        c4 = SECTION_C_POINTS[2];
      } else if (is1Foreign) {
        c4 = SECTION_C_POINTS[1];
      }
    } else if (is1Canadian) {
      if (is3Foreign) {
        c4 = SECTION_C_POINTS[1];
      } else if (is1Foreign) {
        c4 = SECTION_C_POINTS[0];
      }
    }

    if (this.hasCertificateOfQualification) {
      const CLB5Index = CLB_LEVELS.findIndex(level => /5/.test(level.text));
      const isAllCLB5 = LANGUAGE_ABILITIES.every(ability => CLB_LEVELS.indexOf(this.language[ability]) >= CLB5Index);

      if (isAllCLB7) {
        c5 = SECTION_C_POINTS[2];
      } else if (isAllCLB5) {
        c5 = SECTION_C_POINTS[1];
      }
    }

    return { c1, c2, c3, c4, c5 };
  }

  calc() {
    const spouse = this.spouse ? 'withSpouse' : 'withoutSpouse';

    const language = this.languageTotal(this.language, spouse);

    const language2 = this.languageTotal(this.language2, spouse, this.secondLanguage);

    const spouseLanguage = this.languageTotal(this.spouseLanguage, spouse, this.spouse);

    const sectionC = this.sectionC();

    const sectionD = this.additionalPoints.map((key, i) => this.sectionD[i] ? SECTION_D_POINTS[key] : 0);

    this.score = {
      age: this.age && this.age[spouse] || 0,
      education: this.education && this.education[spouse] || 0,
      language, language2,
      work: this.work && this.work[spouse] || 0,
      spouseEducation: this.spouseEducation && this.spouseEducation[spouse] || 0,
      spouseLanguage,
      spouseWork: this.spouseWork && this.spouseWork[spouse] || 0,
      ...sectionC,
      sectionD
    };

    this.totalA = this.score.age + this.score.education + this.score.language + this.score.language2 + this.score.work;
    this.totalB = this.spouse ? this.score.spouseEducation + this.score.spouseLanguage + this.score.spouseWork : 0;
    this.totalC = Math.min(Object.keys(sectionC).reduce((total, subsection) => total += sectionC[subsection], 0), 100);
    this.totalD = Math.min(sectionD.reduce((prev, curr) => prev + curr), 600);
    this.scoreTotal = this.totalA + this.totalB + this.totalC + this.totalD;
  }
}
