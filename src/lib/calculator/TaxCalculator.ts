import SalaryRange from "lib/config/SalaryRange";
import TaxConfig from "lib/config/TaxConfig";

namespace TaxCalculator {

    export const getRange = (salary: number, config: TaxConfig): SalaryRange =>
        config.salaryRanges.find((range: SalaryRange, i: number) => SalaryRange.isInRange(salary, range, config.salaryRanges[i + 1])) || new SalaryRange(0, 0, 0)

    export const getSurplus = (salary: number, range: SalaryRange) => salary - range.floor;

    export const getAnnualTax = (salary: number, range: SalaryRange) => range.fixed + (TaxCalculator.getSurplus(salary, range) * range.aliquote);

    export const getMonthlyTax = (salary: number, range: SalaryRange) => TaxCalculator.getAnnualTax(salary, range) / 12;

    export const getSummary = (annualDeductedSalary: number, config: TaxConfig) => {
        const range = getRange(annualDeductedSalary / 12, config);
        return {
            annual: TaxCalculator.getAnnualTax(annualDeductedSalary, range),
            month: TaxCalculator.getMonthlyTax(annualDeductedSalary, range),
            floor: range.floor,
            aliquote: range.aliquote * 100,
        }
    }
}

export default TaxCalculator;