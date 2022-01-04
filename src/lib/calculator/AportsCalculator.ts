import AportsSummary from "lib/entities/summary/AportsSummary";

namespace AportsCalculator {

    export const getRetired = (grossSalary: number) => grossSalary * 0.11;

    export const getHealthInsurance = (grossSalary: number) => grossSalary * 0.03;

    export const getPAMI = (grossSalary: number) => grossSalary * 0.03;

    export const getSummary = (grossSalary: number): AportsSummary => {
        const retired = AportsCalculator.getRetired(grossSalary);
        const healthInsurance = AportsCalculator.getHealthInsurance(grossSalary);
        const pami = AportsCalculator.getPAMI(grossSalary);
        const total = retired + healthInsurance + pami;
        return {
            retired,
            healthInsurance,
            pami,
            total
        }
    }
}

export default AportsCalculator;