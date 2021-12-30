import type UserInputTax from "./config/UserInputTax";
import type Deductions from "./deduction/entities/Deductions";
import GetDeductions from "./deduction/GetDeduction";
import type SalaryRange from "./config/SalaryRange";
import type ConfigTax from "./config/ConfigTax";
import Formula from "./shared/Formula";
import TaxSummary from "./TaxSummary";
import { formatNumber } from "./shared/Format";

class Tax {
    static incomeTax = (data: UserInputTax, deductions: Deductions) =>
        Formula.salaryGrossAnual(data.salary) - GetDeductions.total(data, deductions);

    static incomeTaxMonth = (data: UserInputTax, deductions: Deductions) =>
        Tax.incomeTax(data, deductions) / 12;

    static isInRange = (tax: number, ranges: SalaryRange[], i: number) =>
        tax >= ranges[i].floor && tax < ranges[i + 1].floor;

    static getIncomeTaxSummary = (userInput: UserInputTax, config: ConfigTax): TaxSummary | null => {
        const tax = Tax.incomeTax(userInput, config.deductions);
        console.log(tax)
        for (let i = 0; i < config.salaryRanges.length - 1; i += 1) {
            if (Tax.isInRange(tax, config.salaryRanges, i)) {
                const range = config.salaryRanges[i];
                return {
                    salary: {
                        net: formatNumber(Formula.salaryNetMonth(userInput.salary, range.getAnualTax(tax))),
                        gross: formatNumber(userInput.salary)
                    },
                    tax: range.getJSON(tax)
                };
            }
        }
        return null;
    };

    static getSummary = (userInput: UserInputTax, config: ConfigTax): TaxSummary | null => {
        if (userInput.salary > config.floor) return Tax.getIncomeTaxSummary(userInput, config);
        return {
            salary: {
                net: formatNumber(Formula.salaryNetMonth(userInput.salary, 0)),
                gross: formatNumber(userInput.salary)
            },
            tax: {
                anual: formatNumber(0),
                month: formatNumber(0),
                floor: formatNumber(0),
                aliquote: 0,
            }
        };
    };
}

export default Tax;
