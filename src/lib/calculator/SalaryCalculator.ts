namespace SalaryCalculator {

    export namespace Formula {
        export const getSalaryNetMonth = (salaryGross: number) => salaryGross * 0.83;
    }

    export const getSalaryGrossAnnual = (salaryGross: number) => salaryGross * 13;

    export const getSalaryNetMonth = (salaryGross: number, anualTax: number) =>
        Formula.getSalaryNetMonth(salaryGross) - anualTax / 12;

}

export default SalaryCalculator;