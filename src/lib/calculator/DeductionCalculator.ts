import SalaryCalculator from "lib/calculator/SalaryCalculator";
import TaxConfig from "lib/config/TaxConfig";
import type Deduction from "../entities/Deduction";
import type Deductions from "../entities/Deductions";
import type TaxUserInput from "../entities/TaxUserInput";

namespace DeductionCalculator {

    export namespace Formula {
        export const getRental = (rental: number): number => rental * 0.4 * 12;
        export const getMortgageCredit = (mortgageCredit: number): number => mortgageCredit * 12;
        export const getDomesticEmployee = (domesticEmployee: number): number => domesticEmployee * 12;
        export const getAports = (salary: number): number => SalaryCalculator.getAnnualSalaryGross(salary) * 0.17;
        export const getChildren = (deduction: number, children: number, childrenDeduction: number): number => deduction * children * (childrenDeduction / 100);
    }

    export const getMin = (value: number, max: number): number => value > max ? max : value;

    export const getAports = (data: TaxUserInput): number => !data.retired ? Formula.getAports(data.salary) : 0;

    export const getRental = (data: TaxUserInput, deductions: Deductions): number => {
        if (!data.rental) return 0;
        const deduction = Formula.getRental(data.rental);
        return DeductionCalculator.getMin(deduction, deductions.max.rental);
    };

    export const getMortgageCredit = (data: TaxUserInput, deductions: Deductions): number => {
        if (!data.mortgageCredit) return 0;
        const deduction = Formula.getMortgageCredit(data.mortgageCredit);
        return DeductionCalculator.getMin(deduction, deductions.max.mortgageCredit);
    };

    export const getDomesticEmployee = (data: TaxUserInput, deductions: Deductions): number => {
        if (!data.domesticEmployee) return 0;
        const deduction = Formula.getDomesticEmployee(data.domesticEmployee);
        return DeductionCalculator.getMin(deduction, deductions.max.domesticEmployee);
    };

    export const getSpouse = (data: TaxUserInput, deduction: Deduction): number => {
        if (!data.spouse) return 0;
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    export const getChildren = (data: TaxUserInput, deduction: Deduction): number => {
        if (!data.children || !data.childrenDeduction) return 0;
        if (!data.patagonic && !data.retired) return Formula.getChildren(deduction.def, data.children, data.childrenDeduction);
        return !data.patagonic
            ? Formula.getChildren(deduction.patagonic, data.children, data.childrenDeduction)
            : Formula.getChildren(deduction.retired, data.children, data.childrenDeduction);
    };

    export const getSpecial = (data: TaxUserInput, deduction: Deduction, floor: number): number => {
        if (data.salary > floor) return 0;
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    export const getMinimumNonTaxable = (data: TaxUserInput, deduction: Deduction): number => !data.patagonic ? deduction.def : deduction.patagonic;

    export const getTotal = (data: TaxUserInput, config: TaxConfig): number => (
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
