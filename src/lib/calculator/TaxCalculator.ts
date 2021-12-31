import DeductionCalculator from "lib/deduction/DeductionCalculator";
import Deductions from "lib/entities/Deductions";
import TaxUserInput from "lib/entities/TaxUserInput";
import SalaryFormula from "lib/salary/SalaryFormula";

namespace TaxCalculator {

    export const getIncomeTaxAnnual = (data: TaxUserInput, deductions: Deductions) =>
        SalaryFormula.getSalaryGrossAnnual(data.salary) - DeductionCalculator.getTotal(data, deductions);

    export const getIncomeTaxMonth = (data: TaxUserInput, deductions: Deductions) =>
        TaxCalculator.getIncomeTaxAnnual(data, deductions) / 12;
}

export default TaxCalculator;