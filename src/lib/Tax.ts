import TaxCalculator from "./calculator/TaxCalculator";
import type TaxConfig from "./config/TaxConfig";
import SalaryRange from "./config/SalaryRange";
import TaxSummary from "./entities/TaxSummary";
import type TaxUserInput from "./entities/TaxUserInput";
import SalaryCalculator from "./calculator/SalaryCalculator";

namespace Tax {

    export const getIncomeTaxSummary = (userInput: TaxUserInput, config: TaxConfig): TaxSummary | null => {
        const tax = TaxCalculator.getIncomeTaxAnnual(userInput, config);

        for (let i = 0; i < config.salaryRanges.length - 1; i += 1) {
            if (SalaryRange.isInRange(tax / 12, config.salaryRanges, i)) {
                const range = config.salaryRanges[i];
                return {
                    salary: {
                        net: SalaryCalculator.getMonthlySalaryNet(userInput.salary, range.getAnnualTax(tax)),
                        gross: userInput.salary
                    },
                    tax: range.getJSON(tax)
                };
            }
        }
        return null;
    };

    export const getDefaultSummary = (userInput: TaxUserInput): TaxSummary | null => ({
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

    export const getSummary = (userInput: TaxUserInput, config: TaxConfig): TaxSummary | null =>
        userInput.salary > config.floor ? Tax.getIncomeTaxSummary(userInput, config) : Tax.getDefaultSummary(userInput);
}

export default Tax;
