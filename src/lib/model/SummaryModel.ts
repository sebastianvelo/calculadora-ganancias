interface SummaryModel {
    salary: {
        net: string;
        gross: string;
    };
    tax: {
        annual: string;
        floor: string;
        month: string;
        aliquote: string;
    }
}

export default SummaryModel;