import Summary from "lib/entities/summary/Summary";
import SummaryModel from "lib/model/SummaryModel";
import { formatNumber } from "lib/shared/Format";

const getSummaryModel = (summary?: Summary | null): SummaryModel => ({
    salary: {
        net: `$${formatNumber(summary?.salary.net)}`,
        gross: `$${formatNumber(summary?.salary.gross)}`,
    },
    tax: {
        annual: `$${formatNumber(summary?.tax.annual)}`,
        month: `$${formatNumber(summary?.tax.month)}`,
        floor: `$${formatNumber(summary?.tax.floor)}`,
        marginalAliquote: `${formatNumber(summary?.tax.marginalAliquote)}%`,
        aliquote: `${formatNumber(summary?.tax.aliquote)}%`,
    },
    aports: {
        retired: `$${formatNumber(summary?.aports.retired)}`,
        healthInsurance: `$${formatNumber(summary?.aports.healthInsurance)}`,
        pami: `$${formatNumber(summary?.aports.pami)}`,
        total: `$${formatNumber(summary?.aports.total)}`,
    }
});

export default getSummaryModel;