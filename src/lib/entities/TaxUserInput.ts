interface TaxUserInput {
    salary: number;
    spouse?: boolean;
    retired?: boolean;
    patagonic?: boolean;
    children?: number;
    childrenDeduction?: 0 | 50 | 100;
    rental?: number;
    mortgageCredit?: number;
    domesticEmployee?: number;
}

export default TaxUserInput;
