export class PointOption {
  text: string;
  withSpouse: number;
  withoutSpouse: number;
}

export const AGES: Array<PointOption> = [
  {text: '17 or less', withSpouse: 0, withoutSpouse: 0},
  {text: '18', withSpouse: 90, withoutSpouse: 99},
  {text: '19', withSpouse: 95, withoutSpouse: 105},
  {text: '20 to 29', withSpouse: 100, withoutSpouse: 110},
  {text: '30', withSpouse: 95, withoutSpouse: 105},
  {text: '31', withSpouse: 90, withoutSpouse: 99},
  {text: '32', withSpouse: 85, withoutSpouse: 94},
  {text: '33', withSpouse: 80, withoutSpouse: 88},
  {text: '34', withSpouse: 75, withoutSpouse: 83},
  {text: '35', withSpouse: 70, withoutSpouse: 77},
  {text: '36', withSpouse: 65, withoutSpouse: 72},
  {text: '37', withSpouse: 60, withoutSpouse: 66},
  {text: '38', withSpouse: 55, withoutSpouse: 61},
  {text: '39', withSpouse: 50, withoutSpouse: 55},
  {text: '40', withSpouse: 45, withoutSpouse: 50},
  {text: '41', withSpouse: 35, withoutSpouse: 39},
  {text: '42', withSpouse: 25, withoutSpouse: 28},
  {text: '43', withSpouse: 15, withoutSpouse: 17},
  {text: '44', withSpouse: 5, withoutSpouse: 6},
  {text: '45 or more', withSpouse: 0, withoutSpouse: 0}
];
