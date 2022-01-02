class SalaryRange {

  fixed: number;

  floor: number;

  aliquote: number;

  constructor(floor: number, fixed: number, aliquote: number) {
    this.floor = floor;
    this.fixed = fixed;
    this.aliquote = aliquote;
  }

  static isInRange = (salary: number, range: SalaryRange, nextRange: SalaryRange) =>
    salary >= range.floor && salary < nextRange.floor;

  static getDefault = () => new SalaryRange(0, 0, 0);

}

export default SalaryRange;
