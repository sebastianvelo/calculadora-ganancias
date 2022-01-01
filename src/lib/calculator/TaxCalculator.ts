import DeductionCalculator from "lib/calculator/DeductionCalculator";
import SalaryCalculator from "lib/calculator/SalaryCalculator";
import TaxConfig from "lib/config/TaxConfig";
import TaxUserInput from "lib/entities/TaxUserInput";

namespace TaxCalculator {

    export const getIncomeTaxAnnual = (data: TaxUserInput, config: TaxConfig) =>
        SalaryCalculator.getAnnualSalaryGross(data.salary) - DeductionCalculator.getTotal(data, config);

    export const getIncomeTaxMonth = (data: TaxUserInput, config: TaxConfig) =>
        TaxCalculator.getIncomeTaxAnnual(data, config) / 12;
}

export default TaxCalculator;