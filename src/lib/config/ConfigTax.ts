import type Deductions from "../deduction/entities/Deductions";
import type SalaryRange from "./SalaryRange";

interface ConfigTax {
    floor: number;
    salaryRanges: SalaryRange[];
    deductions: Deductions;
}

export default ConfigTax;
