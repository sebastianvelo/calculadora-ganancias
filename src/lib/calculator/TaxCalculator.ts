import SalaryRange from "lib/config/SalaryRange";
import TaxConfig from "lib/config/TaxConfig";
import TaxSummary from "lib/entities/summary/TaxSummary";

namespace TaxCalculator {

    export const getRange = (salary: number, config: TaxConfig): SalaryRange =>
        config.salaryRanges.find((range: SalaryRange, i: number) => SalaryRange.isInRange(salary, range, config.salaryRanges[i + 1])) || new SalaryRange(0, 0, 0)

    export const getSurplus = (salary: number, range: SalaryRange) => salary - range.floor;

    export const getAnnualTax = (salary: number, range: SalaryRange) => range.fixed + (TaxCalculator.getSurplus(salary, range) * range.aliquote);

    export const getMonthlyTax = (salary: number, range: SalaryRange) => TaxCalculator.getAnnualTax(salary, range) / 12;

    export const getSummary = (annualSalary: number, config: TaxConfig): TaxSummary => {
        const range = getRange(annualSalary / 12, config);
        return {
            annual: TaxCalculator.getAnnualTax(annualSalary, range),
            month: TaxCalculator.getMonthlyTax(annualSalary, range),
            floor: range.floor,
            aliquote: range.aliquote * 100,
        }
    }
}

export default TaxCalculator;