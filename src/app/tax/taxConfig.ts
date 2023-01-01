import TaxConfig from "lib/config/TaxConfig";
import SalaryRange from "lib/config/SalaryRange";

const taxConfig: TaxConfig =
{
    floor: 330000,
    specialFloor: 431988,
    salaryRanges: [
        new SalaryRange(0, 0, 0.05),
        new SalaryRange(173_834.61, 8_691.73, 0.09),
        new SalaryRange(347_669.23, 24_336.85, 0.12),
        new SalaryRange(521_503.84, 45_197, 0.15),
        new SalaryRange(695_338.47, 71_272.19, 0.19),
        new SalaryRange(1_043_007.68, 137_329.34, 0.23),
        new SalaryRange(1_390_676.9, 217_293.26, 0.27),
        new SalaryRange(2_086_015.35, 405_034.64, 0.31),
        new SalaryRange(2_781_353.85, 620_589.58, 0.35),
        new SalaryRange(Number.POSITIVE_INFINITY, 0, 0)
    ],
    deductions: {
        max: {
            rental: 451_683.19,
            mortgageCredit: 20000,
            domesticEmployee: 451_683.19,
            aports: 283752.60,
        },
        spouse: {
            def: 421_088.24,
            patagonic: 513_727.67,
            retired: 513_727.67
        },
        children: {
            def: 212_356.37,
            patagonic: 259_074.78,
            retired: 259_074.78,
        },
        special: {
            def: 1_580_891.18,
            patagonic: 1_928_687.34,
            retired: 1_928_687.34,
        },
        minimumNonTaxable: {
            def: 451_683.19,
            patagonic: 551_053.52,
            retired: 551_053.52
        }
    }
};

export default taxConfig;