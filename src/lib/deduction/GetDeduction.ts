import type UserInputTax from "../config/UserInputTax";
import type Deduction from "./entities/Deduction";
import type Deductions from "./entities/Deductions";
import Formula from "../shared/Formula";

class GetDeductions {
    static aports = (data: UserInputTax) => !data.retired ? Formula.aports(data.salary) : 0;

    static rental = (data: UserInputTax, deductions: Deductions) => {
        if (!data.rental) return 0;
        const deduction = Formula.rental(data.rental);
        return deduction > deductions.max.rental
            ? deductions.max.rental
            : deduction;
    };

    static mortgageCredit = (data: UserInputTax, deductions: Deductions) => {
        if (!data.mortgageCredit) return 0;
        const deduction = Formula.mortgageCredit(data.mortgageCredit);
        return deduction > deductions.max.mortgageCredit
            ? deductions.max.mortgageCredit
            : deduction;
    };

    static dometicEmployee = (data: UserInputTax, deductions: Deductions) => {
        if (!data.domesticEmployee) return 0;
        const deduction = Formula.domesticEmployee(data.domesticEmployee);
        return deduction > deductions.max.domesticEmployee
            ? deductions.max.domesticEmployee
            : deduction;
    };

    static spouse = (data: UserInputTax, deduction: Deduction) => {
        if (!data.spouse) return 0;
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    static children = (data: UserInputTax, deduction: Deduction) => {
        if (!data.children) return 0;
        if (!data.patagonic && !data.retired) return deduction.def * data.children;
        return !data.patagonic
            ? deduction.patagonic * data.children
            : deduction.retired * data.children;
    };

    static special = (data: UserInputTax, deduction: Deduction) => {
        if (!data.patagonic && !data.retired) return deduction.def;
        return !data.patagonic ? deduction.patagonic : deduction.retired;
    };

    static minimumNonTaxable = (data: UserInputTax, deduction: Deduction) => !data.patagonic ? deduction.def : deduction.patagonic;

    static total = (data: UserInputTax, deductions: Deductions) => (
        GetDeductions.children(data, deductions.children) +
        GetDeductions.spouse(data, deductions.spouse) +
        GetDeductions.special(data, deductions.special) +
        GetDeductions.minimumNonTaxable(data, deductions.minimumNonTaxable) +
        GetDeductions.dometicEmployee(data, deductions) +
        GetDeductions.mortgageCredit(data, deductions) +
        GetDeductions.rental(data, deductions) +
        GetDeductions.aports(data)
    );
}

export default GetDeductions;
