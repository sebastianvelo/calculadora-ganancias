import { formatNumber } from "lib/shared/Format";

class SalaryRange {

  fixed: number;

  floor: number;

  aliquote: number;

  constructor(floor: number, fixed: number, aliquote: number) {
    this.floor = floor;
    this.fixed = fixed;
    this.aliquote = aliquote;
  }

  getSurplus(tax: number) {
    return tax - this.floor;
  }

  getAnualTax(tax: number) {
    return this.fixed + this.getSurplus(tax) * this.aliquote;
  }

  getMonthlyTax(tax: number) {
    return this.getAnualTax(tax) / 12;
  }

  getJSON(tax: number) {
    return {
      anual: formatNumber(this.getAnualTax(tax)),
      month: formatNumber(this.getMonthlyTax(tax)),
      floor: formatNumber(this.floor),
      aliquote: this.aliquote * 100,
    };
  }

}

export default SalaryRange;
