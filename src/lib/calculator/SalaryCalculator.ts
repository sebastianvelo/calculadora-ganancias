import TaxConfig from "lib/config/TaxConfig";
import SalarySummary from "lib/entities/summary/SalarySummary";
import TaxUserInput from "lib/entities/TaxUserInput";
import DeductionCalculator from "./DeductionCalculator";

namespace SalaryCalculator {

    export namespace Formula {
        export const getMonthlySalaryNet = (salaryGross: number): number => salaryGross * 0.83;
    }

    /**
     * Obtener sueldo bruto anual, incluyendo el aguinaldo
     * @param monthlySalaryGross - Sueldo bruto mensual
     * @returns Sueldo bruto anual
     */
    export const getAnnualSalaryGross = (monthlySalaryGross: number): number =>
        monthlySalaryGross * 13;

    /**
     * Obtener sueldo bruto mensual promedio, incluyendo el aguinaldo
     * @param monthlySalaryGross - Sueldo bruto mensual
     * @returns Sueldo bruto mensual, incluyendo el aguinaldo
     */
    export const getMonthlySalaryGross = (monthlySalaryGross: number): number =>
        SalaryCalculator.getAnnualSalaryGross(monthlySalaryGross) / 12;

    /**
     * Obtener sueldo neto mensual
     * @param monthlySalaryGross - Sueldo bruto mensual
     * @param monthlyTax - Impuesto mensual
     * @returns Sueldo neto mensual restando aportes e impuesto a las ganancias
     */
    export const getMonthlySalaryNet = (monthlySalaryGross: number, monthlyTax: number): number =>
        Formula.getMonthlySalaryNet(monthlySalaryGross) - monthlyTax;

    /**
     * Obtener sueldo bruto anual con las deducciones aplicadas
     * @param userInput - Input del usuario
     * @param config - Configuración del impuesto
     * @returns Sueldo bruto anual con las deducciones aplicadas
     */
    export const getAnnualSalaryGrossWithDeductions = (userInput: TaxUserInput, config: TaxConfig): number =>
        SalaryCalculator.getAnnualSalaryGross(userInput.salary) - DeductionCalculator.getTotal(userInput, config);

    /**
     * @param monthlySalaryGross - Salario bruto mensual
     * @param monthlyTax - Impuesto a las ganancias mensual
     * @returns Salario bruto y neto
     */
    export const getSummary = (monthlySalaryGross: number, monthlyTax: number): SalarySummary => ({
        net: SalaryCalculator.getMonthlySalaryNet(monthlySalaryGross, monthlyTax),
        gross: monthlySalaryGross
    });

    /**
     * @param monthlySalaryGross - Salario bruto mensual
     * @returns Salario bruto y neto
     */
    export const getDefaultSummary = (monthlySalaryGross: number): SalarySummary => SalaryCalculator.getSummary(monthlySalaryGross, 0);

}

export default SalaryCalculator;