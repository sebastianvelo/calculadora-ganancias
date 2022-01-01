import type Deductions from "../entities/Deductions";
import type SalaryRange from "./SalaryRange";

interface TaxConfig {
    floor: number;
    specialFloor: number;
    salaryRanges: SalaryRange[];
    deductions: Deductions;
}

export default TaxConfig;
