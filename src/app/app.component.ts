import { Component } from '@angular/core';

import {
  MdSlideToggleChange
} from '@angular/material';

@Component({
  selector: 'ee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spouse = false;

  toggleSpouse(event: MdSlideToggleChange) {
    this.spouse = event.checked;
  }
}
