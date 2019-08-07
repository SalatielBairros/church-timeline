export class FilterData {
  constructor() {
    this.StartYear = -100;
    this.EndYear = 2020;
    this.KeyWord = '';
  }
  KeyWord: string;
  StartYear: number;
  EndYear: number;

  getOdataFilter(): string {
    let filter = '$filter=';
    if (this.KeyWord.trim().length > 0) {
      filter += `(substringof('${this.KeyWord}', Title) or substringof('${this.KeyWord}', Description)) and `;
    }
    if (this.StartYear === 0 && this.EndYear === 0) {
      this.StartYear = -100;
      this.EndYear = 2020;
    }
    filter += `((Year ge ${this.StartYear}) and (Year le ${this.EndYear}))`;

    return filter;
  }
}
