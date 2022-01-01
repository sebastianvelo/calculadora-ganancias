class SalaryRange {

  fixed: number;

  floor: number;

  aliquote: number;

  constructor(floor: number, fixed: number, aliquote: number) {
    this.floor = floor;
    this.fixed = fixed;
    this.aliquote = aliquote;
  }

  static isInRange = (salary: number, ranges: SalaryRange[], i: number) =>
    salary >= ranges[i].floor && salary < ranges[i + 1].floor;

  getSurplus(salary: number) {
    return salary - this.floor;
  }

  getAnnualTax(salary: number) {
    return this.fixed + this.getSurplus(salary) * this.aliquote;
  }

  getMonthlyTax(salary: number) {
    return this.getAnnualTax(salary) / 12;
  }

  getJSON(salary: number) {
    return {
      annual: this.getAnnualTax(salary),
      month: this.getMonthlyTax(salary),
      floor: this.floor,
      aliquote: this.aliquote * 100,
    };
  }

}

export default SalaryRange;
