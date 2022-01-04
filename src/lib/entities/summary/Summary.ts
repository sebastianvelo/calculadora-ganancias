import AportsSummary from "./AportsSummary";
import SalarySummary from "./SalarySummary";
import TaxSummary from "./TaxSummary";

interface Summary {
    salary: SalarySummary;
    tax: TaxSummary;
    aports: AportsSummary;
}

export default Summary;