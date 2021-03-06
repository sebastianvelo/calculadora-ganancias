import AportsCalculator from "./calculator/AportsCalculator";
import SalaryCalculator from "./calculator/SalaryCalculator";
import TaxCalculator from "./calculator/TaxCalculator";
import type TaxConfig from "./config/TaxConfig";
import Summary from "./entities/summary/Summary";
import type TaxUserInput from "./entities/TaxUserInput";

namespace Calculator {

    export const getIncomeTaxSummary = (userInput: TaxUserInput, config: TaxConfig): Summary => {
        const annualSalary = SalaryCalculator.getAnnualSalaryGrossWithDeductions(userInput, config);
        const tax = TaxCalculator.getSummary(annualSalary, config);
        const salary = SalaryCalculator.getSummary(userInput.salary, tax.month);
        const aports = AportsCalculator.getSummary(userInput.salary);
        return {
            salary,
            tax,
            aports
        };
    };

    export const getDefaultSummary = (userInput: TaxUserInput): Summary => ({
        salary: SalaryCalculator.getDefaultSummary(userInput.salary),
        tax: TaxCalculator.getDefaultSummary(),
        aports: AportsCalculator.getSummary(userInput.salary),
    });

    export const getSummary = (userInput: TaxUserInput, config: TaxConfig): Summary =>
        userInput.salary > config.floor ? Calculator.getIncomeTaxSummary(userInput, config) : Calculator.getDefaultSummary(userInput);
}

export default Calculator;
