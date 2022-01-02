import TaxConfig from "lib/config/TaxConfig";
import SalarySummary from "lib/entities/summary/SalarySummary";
import TaxUserInput from "lib/entities/TaxUserInput";
import DeductionCalculator from "./DeductionCalculator";

namespace SalaryCalculator {

    export namespace Formula {
        export const getMonthlySalaryNet = (salaryGross: number): number => salaryGross * 0.83;
    }

    export const getAnnualSalaryGross = (salaryGross: number): number =>
        salaryGross * 13;

    export const getMonthlySalaryGross = (salaryGross: number): number =>
        SalaryCalculator.getAnnualSalaryGross(salaryGross) / 12;

    export const getMonthlySalaryNet = (salaryGross: number, monthlyTax: number): number =>
        Formula.getMonthlySalaryNet(salaryGross) - monthlyTax;

    export const getAnnualSalaryGrossWithDeductions = (userInput: TaxUserInput, config: TaxConfig): number =>
        SalaryCalculator.getAnnualSalaryGross(userInput.salary) - DeductionCalculator.getTotal(userInput, config);

    export const getSummary = (userInput: TaxUserInput, tax: number): SalarySummary => ({
        net: SalaryCalculator.getMonthlySalaryNet(userInput.salary, tax),
        gross: userInput.salary
    });

    export const getDefaultSummary = (userInput: TaxUserInput): SalarySummary => SalaryCalculator.getSummary(userInput, 0);

}

export default SalaryCalculator;