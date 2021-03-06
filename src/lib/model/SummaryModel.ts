interface SummaryModel {
    salary: {
        net: string;
        gross: string;
    };
    tax: {
        annual: string;
        floor: string;
        month: string;
        marginalAliquote: string;
        aliquote: string;
    },
    aports: {
        retired: string;
        healthInsurance: string;
        pami: string;
        total: string;
    }
}

export default SummaryModel;