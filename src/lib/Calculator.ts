import SalaryCalculator from "./calculator/SalaryCalculator";
import TaxCalculator from "./calculator/TaxCalculator";
import type TaxConfig from "./config/TaxConfig";
import Summary from "./entities/summary/Summary";
import type TaxUserInput from "./entities/TaxUserInput";

namespace Calculator {

    export const getIncomeTaxSummary = (userInput: TaxUserInput, config: TaxConfig): Summary => {
        const annualSalary = SalaryCalculator.getAnnualSalaryGrossWithDeductions(userInput, config);
        const tax = TaxCalculator.getSummary(annualSalary, config);
        const salary = SalaryCalculator.getSummary(userInput, tax.month);
        return {
            salary,
            tax
        };
    };

    export const getDefaultSummary = (userInput: TaxUserInput): Summary => ({
        salary: SalaryCalculator.getSummary(userInput, 0),
        tax: {
            annual: 0,
        month: 0,
            floor: 0,
            marginalAliquote: 0,
            aliquote: 0
        }
    });

    export const getSummary = (userInput: TaxUserInput, config: TaxConfig): Summary =>
        userInput.salary > config.floor ? Calculator.getIncomeTaxSummary(userInput, config) : Calculator.getDefaultSummary(userInput);
}

export default Calculator;
