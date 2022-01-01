import SalaryCalculator from "./calculator/SalaryCalculator";
import TaxCalculator from "./calculator/TaxCalculator";
import type TaxConfig from "./config/TaxConfig";
import TaxSummary from "./entities/TaxSummary";
import type TaxUserInput from "./entities/TaxUserInput";

namespace Tax {

    export const getIncomeTaxSummary = (userInput: TaxUserInput, config: TaxConfig): TaxSummary => {
        const annualDeductedSalary = SalaryCalculator.getAnnualDeductedSalary(userInput, config);
        const tax = TaxCalculator.getSummary(annualDeductedSalary, config);
        return {
            salary: {
                net: SalaryCalculator.getMonthlySalaryNet(userInput.salary, tax.month),
                gross: userInput.salary
            },
            tax
        };
    };

    export const getDefaultSummary = (userInput: TaxUserInput): TaxSummary => ({
        salary: {
            net: SalaryCalculator.getMonthlySalaryNet(userInput.salary, 0),
            gross: userInput.salary
        },
        tax: {
            annual: 0,
            month: 0,
            floor: 0,
            aliquote: 0,
        }
    });

    export const getSummary = (userInput: TaxUserInput, config: TaxConfig): TaxSummary =>
        userInput.salary > config.floor ? Tax.getIncomeTaxSummary(userInput, config) : Tax.getDefaultSummary(userInput);
}

export default Tax;
