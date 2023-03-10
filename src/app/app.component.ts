import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  testStarted: boolean = false;
  results: boolean = false;
  progress = 0;
  total = 0;
  status: string = '';
  resetScores = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  scores = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  page = 0;
  questions: string[][] = [
    [
      'Feeling sad or down in the dumps',
      'Feeling unhappy or blue',
      'Crying spells or tearfulness',
      'Feeling discouraged',
      'Feeling hopeless',
    ],
    [
      'Low self-esteem',
      'Feeling worthless or inadequate',
      'Guilt or shame',
      'Criticizing yourself or blaming others',
      'Difficulty making decisions',
    ],
    [
      'Loss of interest in family, friends or colleagues',
      'Loneliness',
      'Spending less time with family or friends',
      'Loss of motivation',
      'Loss of interest in work or other activities',
    ],
    [
      'Avoiding work or other activities',
      'Loss of pleasure or satisfaction in life',
      'Feeling tired',
      'Difficulty sleeping or sleeping too much',
      'Decreased or increased appetite',
    ],
    [
      'Loss of interest in sex',
      'Worrying about your health',
      'Do you have any suicidal thoughts?',
      'Would you like to end your life?',
      'Do you have a plan for harming yourself?',
    ],
  ];

  startTest() {
    this.testStarted = true;
  }
  nextPage() {
    this.page++;
    this.progress = (this.page / 5) * 100;
  }
  reset() {
    this.testStarted = false;
    this.scores = [...this.resetScores];
    this.progress = 0;
    this.results = false;
    this.page = 0;
  }
  print() {
    console.log(this.scores);
  }
  submit() {
    this.page++;
    const sum = this.scores.reduce((a, i) => {
      return a + i;
    });
    this.total = sum;
    this.progress = 100;
    this.results = true;
    this.status = this.getStatus(sum);
  }
  getStatus(score: number) {
    if (score <= 5) {
      return 'Not Depressed';
    } else if (score <= 10) {
      return 'Normal but unhappy';
    } else if (score <= 25) {
      return 'Mild depression';
    } else if (score <= 50) {
      return 'Moderate depression';
    } else if (score <= 75) {
      return 'Severe depression';
    } else {
      return 'Extreme depression';
    }
  }
}
