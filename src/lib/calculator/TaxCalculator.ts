import SalaryRange from "lib/config/SalaryRange";
import TaxConfig from "lib/config/TaxConfig";
import TaxSummary from "lib/entities/summary/TaxSummary";

namespace TaxCalculator {

    export const getRange = (salary: number, config: TaxConfig): SalaryRange =>
        config.salaryRanges.find((range: SalaryRange, i: number) =>
            SalaryRange.isInRange(salary, range, config.salaryRanges[i + 1])) || SalaryRange.getDefault()

    export const getSurplus = (salary: number, range: SalaryRange) => salary - range.floor;

    export const getAnnualTax = (salary: number, range: SalaryRange) => range.fixed + (TaxCalculator.getSurplus(salary, range) * range.aliquote);

    export const getMonthlyTax = (salary: number, range: SalaryRange) => TaxCalculator.getAnnualTax(salary, range) / 12;

    export const getAliquote = (salary: number, range: SalaryRange) => (TaxCalculator.getMonthlyTax(salary, range) / salary) * 100;

    export const getSummary = (annualSalary: number, config: TaxConfig): TaxSummary => {
        const range = TaxCalculator.getRange(annualSalary / 12, config);
        return {
            annual: TaxCalculator.getAnnualTax(annualSalary, range),
            month: TaxCalculator.getMonthlyTax(annualSalary, range),
            floor: range.floor,
            marginalAliquote: range.aliquote * 100,
            aliquote: TaxCalculator.getAliquote(annualSalary, range)
        }
    }

    export const getDefaultSummary = (): TaxSummary => ({
        annual: 0,
        month: 0,
        floor: 0,
        marginalAliquote: 0,
        aliquote: 0
    })
}

export default TaxCalculator;