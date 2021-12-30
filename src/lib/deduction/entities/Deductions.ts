import type Deduction from "./Deduction";

interface Deductions {
    max: {
        rental: number;
        mortgageCredit: number;
        domesticEmployee: number;
    };
    spouse: Deduction;
    children: Deduction;
    special: Deduction;
    minimumNonTaxable: Deduction;
}

export default Deductions;
