import TaxConfig from "lib/config/TaxConfig";
import SalaryRange from "lib/config/SalaryRange";

const taxConfig: TaxConfig =
{
    floor: 225937,
    salaryRanges: [
        new SalaryRange(0, 0, 0.05),
        new SalaryRange(97202, 4860.1, 0.09),
        new SalaryRange(194404.01, 13608.28, 0.12),
        new SalaryRange(291606.01, 25272.53, 0.15),
        new SalaryRange(388808.02, 39852.83, 0.19),
        new SalaryRange(583212.02, 76789.59, 0.23),
        new SalaryRange(777616.02, 121502.5, 0.27),
        new SalaryRange(1166424.03, 226480.67, 0.31),
        new SalaryRange(1555232.07, 347011.16, 0.35),
        new SalaryRange(Number.POSITIVE_INFINITY, 0, 0)
    ],
    deductions: {
        max: {
            rental: 252564.84,
            mortgageCredit: 20000,
            domesticEmployee: 167678
        },
        spouse: {
            def: 235457.25,
            patagonic: 287257.86,
            retired: 287257.86
        },
        children: {
            def: 118741.97,
            patagonic: 144865.21,
            retired: 144865.21,
        },
        special: {
            def: 1212311.24,
            patagonic: 1479019.72,
            retired: 1479019.72,
        },
        minimumNonTaxable: {
            def: 252564.84,
            patagonic: 308129.12,
            retired: 308129.12
        }
    }
};

export default taxConfig;