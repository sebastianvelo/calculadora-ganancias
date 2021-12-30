interface TaxSummary {
    salary: {
        net: string;
        gross: string;
    };
    tax: {
        anual: string;
        floor: string;
        month: string;
        aliquote: number;
    }
}

export default TaxSummary;