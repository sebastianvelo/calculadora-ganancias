import TaxSummary from "lib/entities/TaxSummary";
import TaxSummaryModel from "lib/model/TaxSummaryModel";
import { formatNumber } from "lib/shared/Format";

const getTaxSummaryModel = (summary?: TaxSummary | null): TaxSummaryModel => ({
    salary: {
        net: `$${formatNumber(summary?.salary.net)}`,
        gross: `$${formatNumber(summary?.salary.gross)}`,
    },
    tax: {
        annual: `$${formatNumber(summary?.tax.annual)}`,
        month: `$${formatNumber(summary?.tax.month)}`,
        floor: `$${formatNumber(summary?.tax.floor)}`,
        aliquote: `${formatNumber(summary?.tax.aliquote)}%`,
    }
});

export default getTaxSummaryModel;