import { Component } from '@angular/core';

import {
  AGES, Age
} from './points';

@Component({
  selector: 'ee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ages = AGES;

  score = {
    age: 0,
  };

  spouse = false;
  age: Age;

  calc() {
    const spouse = this.spouse ? 'withSpouse' : 'withoutSpouse';
    this.score = {
      age: this.age[spouse]
    };
  }
}
