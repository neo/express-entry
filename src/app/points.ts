export class PointOption {
  text: string;
  withSpouse: number;
  withoutSpouse: number;
}

export class LanguagePoints {
  reading?: PointOption;
  writing?: PointOption;
  listening?: PointOption;
  speaking?: PointOption;
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

export const EDUCATION_LEVELS: Array<PointOption> = [
  {text: 'Less than secondary school (high school)', withSpouse: 0, withoutSpouse: 0},
  {text: 'Secondary diploma (high school graduation)', withSpouse: 28, withoutSpouse: 30},
  {text: 'One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute', withSpouse: 84, withoutSpouse: 90},
  {text: 'Two-year program at a university, college, trade or technical school, or other institute', withSpouse: 91, withoutSpouse: 98},
  {text: 'Bachelor\'s degree OR  a three or more year program at a university, college, trade or technical school, or other institute', withSpouse: 112, withoutSpouse: 120},
  {text: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years', withSpouse: 119, withoutSpouse: 128},
  {text: 'Master\'s degree, OR professional degree needed to practice in a licensed profession (For "professional degree," the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)', withSpouse: 126, withoutSpouse: 135},
  {text: 'Doctoral level university degree (Ph.D.)', withSpouse: 140, withoutSpouse: 150},
];

export const CLB_LEVELS: Array<PointOption> = [
  {text: 'Less than CLB 4', withSpouse: 0, withoutSpouse: 0},
  {text: 'CLB 4 or 5', withSpouse: 6, withoutSpouse: 6},
  {text: 'CLB 6', withSpouse: 8, withoutSpouse: 9},
  {text: 'CLB 7', withSpouse: 16, withoutSpouse: 17},
  {text: 'CLB 8', withSpouse: 22, withoutSpouse: 23},
  {text: 'CLB 9', withSpouse: 29, withoutSpouse: 31},
  {text: 'CLB 10 or more', withSpouse: 32, withoutSpouse: 34}
];

export const SECOND_CLB_LEVELS: Array<PointOption> = [
  {text: 'CLB 4 or less', withSpouse: 0, withoutSpouse: 0},
  {text: 'CLB 5 or 6', withSpouse: 1, withoutSpouse: 1},
  {text: 'CLB 7 or 8', withSpouse: 3, withoutSpouse: 3},
  {text: 'CLB 9 or more', withSpouse: 6, withoutSpouse: 6}
];

export const CANADIAN_WORK_EXPERIENCE: Array<PointOption> = [
  {text: 'Less than a year', withSpouse: 0, withoutSpouse: 0},
  {text: '1 year', withSpouse: 35, withoutSpouse: 40},
  {text: '2 years', withSpouse: 46, withoutSpouse: 53},
  {text: '3 years', withSpouse: 56, withoutSpouse: 64},
  {text: '4 years', withSpouse: 63, withoutSpouse: 72},
  {text: '5 years or more', withSpouse: 70, withoutSpouse: 80}
];

export const SPOUSE_EDUCATION_LEVELS: Array<PointOption> = [
  {text: 'Less than secondary school (high school)', withSpouse: 0, withoutSpouse: 0},
  {text: 'Secondary school (high school graduation)', withSpouse: 2, withoutSpouse: 0},
  {text: 'One-year program at a university, college, trade or technical school, or other institute', withSpouse: 6, withoutSpouse: 0},
  {text: 'Two-year program at a university, college, trade or technical in school, or other institute', withSpouse: 7, withoutSpouse: 0},
  {text: 'Bachelor\'s degree OR  a three or more year program at a university, college, trade or technical school, or other institute', withSpouse: 8, withoutSpouse: 0},
  {text: 'Two or more certificates, diplomas, or degrees. One must be for a program of three or more years', withSpouse: 9, withoutSpouse: 0},
  {text: 'Master\'s degree, or professional degree needed to practice in a licensed profession (For "professional degree", the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)', withSpouse: 10, withoutSpouse: 0},
  {text: 'Doctoral level university degree (PhD)', withSpouse: 10, withoutSpouse: 0}
];

export const SPOUSE_CLB_LEVELS: Array<PointOption> = [
  {text: 'CLB 4 or less', withSpouse: 0, withoutSpouse: 0},
  {text: 'CLB 5 or 6', withSpouse: 1, withoutSpouse: 0},
  {text: 'CLB 7 or 8', withSpouse: 3, withoutSpouse: 0},
  {text: 'CLB 9 or more', withSpouse: 5, withoutSpouse: 0},
];

export const SPOUSE_CANADIAN_WORK_EXPERIENCE: Array<PointOption> = [
  {text: 'None or less than a year', withSpouse: 0, withoutSpouse: 0},
  {text: '1 year', withSpouse: 5, withoutSpouse: 0},
  {text: '2 years', withSpouse: 7, withoutSpouse: 0},
  {text: '3 years', withSpouse: 8, withoutSpouse: 0},
  {text: '4 years', withSpouse: 9, withoutSpouse: 0},
  {text: '5 years or more', withSpouse: 10, withoutSpouse: 0}
];
