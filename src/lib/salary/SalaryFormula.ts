namespace SalaryFormula {

    export const getSalaryGrossAnnual = (salaryGross: number) => salaryGross * 13;

    export const getSalaryNetMonth = (salaryGross: number, anualTax: number) =>
        salaryGross * 0.83 - anualTax / 12;

}

export default SalaryFormula;