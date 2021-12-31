import type TaxUserInput from "../entities/TaxUserInput";
import type Deduction from "../entities/Deduction";
import type Deductions from "../entities/Deductions";
import DeductionFormula from "./DeductionFormula";

namespace DeductionCalculator {
    export const getAports = (data: TaxUserInput) => !data.retired ? DeductionFormula.getAports(data.salary) : 0;

    export const getRental = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.rental) return 0;
        const deduction = DeductionFormula.getRental(data.rental);
        return deduction > deductions.max.rental
            ? deductions.max.rental
            : deduction;
    };

    export const getMortgageCredit = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.mortgageCredit) return 0;
        const deduction = DeductionFormula.getMortgageCredit(data.mortgageCredit);
        return deduction > deductions.max.mortgageCredit
            ? deductions.max.mortgageCredit
            : deduction;
    };

    export const getDomesticEmployee = (data: TaxUserInput, deductions: Deductions) => {
        if (!data.domesticEmployee) return 0;
        const deduction = DeductionFormula.getDomesticEmployee(data.domesticEmployee);
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
        if (!data.children) return 0;
        if (!data.patagonic && !data.retired) return deduction.def * data.children;
        return !data.patagonic
            ? deduction.patagonic * data.children
            : deduction.retired * data.children;
    };

    export const getSpecial = (data: TaxUserInput, deduction: Deduction) => {
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    export const getMinimumNonTaxable = (data: TaxUserInput, deduction: Deduction) => !data.patagonic ? deduction.def : deduction.patagonic;

    export const getTotal = (data: TaxUserInput, deductions: Deductions) => (
        DeductionCalculator.getChildren(data, deductions.children) +
        DeductionCalculator.getSpouse(data, deductions.spouse) +
        DeductionCalculator.getSpecial(data, deductions.special) +
        DeductionCalculator.getMinimumNonTaxable(data, deductions.minimumNonTaxable) +
        DeductionCalculator.getDomesticEmployee(data, deductions) +
        DeductionCalculator.getMortgageCredit(data, deductions) +
        DeductionCalculator.getRental(data, deductions) +
        DeductionCalculator.getAports(data)
    );
}

export default DeductionCalculator;
