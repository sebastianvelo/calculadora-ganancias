import TaxConfig from "lib/config/TaxConfig";
import TaxUserInput from "lib/entities/TaxUserInput";
import DeductionCalculator from "./DeductionCalculator";

namespace SalaryCalculator {

    export namespace Formula {
        export const getMonthlySalaryNet = (salaryGross: number) => salaryGross * 0.83;
    }

    export const getAnnualSalaryGross = (salaryGross: number) =>
        salaryGross * 13;

    export const getMonthlySalaryGross = (salaryGross: number) =>
        SalaryCalculator.getAnnualSalaryGross(salaryGross) / 12;

    export const getMonthlySalaryNet = (salaryGross: number, monthlyTax: number) =>
        Formula.getMonthlySalaryNet(salaryGross) - monthlyTax;

    export const getAnnualDeductedSalary = (data: TaxUserInput, config: TaxConfig) =>
        SalaryCalculator.getAnnualSalaryGross(data.salary) - DeductionCalculator.getTotal(data, config);

}

export default SalaryCalculator;