import SalaryCalculator from "lib/calculator/SalaryCalculator";
import TaxConfig from "lib/config/TaxConfig";
import type Deduction from "../entities/Deduction";
import type Deductions from "../entities/Deductions";
import type TaxUserInput from "../entities/TaxUserInput";

namespace DeductionCalculator {

    export namespace Formula {
        export const getRental = (rental: number) => rental * 0.4 * 12;
        export const getMortgageCredit = (mortgageCredit: number) => mortgageCredit * 12;
        export const getDomesticEmployee = (domesticEmployee: number) => domesticEmployee * 12;
        export const getAports = (salary: number) => SalaryCalculator.getAnnualSalaryGross(salary) * 0.17;
        export const getChildren = (deduction: number, children: number, childrenDeduction: number) => deduction * children * (childrenDeduction / 100);
    }

    export const getAports = (data: TaxUserInput) => !data.retired ? Formula.getAports(data.salary) : 0;

    export const getRental = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.rental) return 0;
        const deduction = Formula.getRental(data.rental);
        return deduction > deductions.max.rental
            ? deductions.max.rental
            : deduction;
    };

    export const getMortgageCredit = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.mortgageCredit) return 0;
        const deduction = Formula.getMortgageCredit(data.mortgageCredit);
        return deduction > deductions.max.mortgageCredit
            ? deductions.max.mortgageCredit
            : deduction;
    };

    export const getDomesticEmployee = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.domesticEmployee) return 0;
        const deduction = Formula.getDomesticEmployee(data.domesticEmployee);
        return deduction > deductions.max.domesticEmployee
            ? deductions.max.domesticEmployee
            : deduction;
    };

    export const getSpouse = (data: TaxUserInput, deduction: Deduction) => {
        if (!data.spouse) return 0;
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    export const getChildren = (data: TaxUserInput, deduction: Deduction) => {
        if (!data.children || !data.childrenDeduction) return 0;
        if (!data.patagonic && !data.retired) return Formula.getChildren(deduction.def, data.children, data.childrenDeduction);
        return !data.patagonic
            ? Formula.getChildren(deduction.patagonic, data.children, data.childrenDeduction)
            : Formula.getChildren(deduction.retired, data.children, data.childrenDeduction);
    };

    export const getSpecial = (data: TaxUserInput, deduction: Deduction, floor: number) => {
        if (data.salary > floor) return 0;
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    export const getMinimumNonTaxable = (data: TaxUserInput, deduction: Deduction) => !data.patagonic ? deduction.def : deduction.patagonic;

    export const getTotal = (data: TaxUserInput, config: TaxConfig) => (
        DeductionCalculator.getChildren(data, config.deductions.children) +
        DeductionCalculator.getSpouse(data, config.deductions.spouse) +
        DeductionCalculator.getSpecial(data, config.deductions.special, config.specialFloor) +
        DeductionCalculator.getMinimumNonTaxable(data, config.deductions.minimumNonTaxable) +
        DeductionCalculator.getDomesticEmployee(data, config.deductions) +
        DeductionCalculator.getMortgageCredit(data, config.deductions) +
        DeductionCalculator.getRental(data, config.deductions) +
        DeductionCalculator.getAports(data)
    );
}

export default DeductionCalculator;
