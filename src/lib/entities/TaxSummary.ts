interface TaxSummary {
    salary: {
        net: number;
        gross: number;
    };
    tax: {
        annual: number;
        floor: number;
        month: number;
        aliquote: number;
    }
}

export default TaxSummary;