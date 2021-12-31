class SalaryRange {

  fixed: number;

  floor: number;

  aliquote: number;

  constructor(floor: number, fixed: number, aliquote: number) {
    this.floor = floor;
    this.fixed = fixed;
    this.aliquote = aliquote;
  }

  static isInRange = (tax: number, ranges: SalaryRange[], i: number) =>
    tax >= ranges[i].floor && tax < ranges[i + 1].floor;

  getSurplus(tax: number) {
    return tax - this.floor;
  }

  getAnnualTax(tax: number) {
    return this.fixed + this.getSurplus(tax) * this.aliquote;
  }

  getMonthlyTax(tax: number) {
    return this.getAnnualTax(tax) / 12;
  }

  getJSON(tax: number) {
    return {
      annual: this.getAnnualTax(tax),
      month: this.getMonthlyTax(tax),
      floor: this.floor,
      aliquote: this.aliquote * 100,
    };
  }

}

export default SalaryRange;
