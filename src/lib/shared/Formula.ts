class Formula {

    static rental = (rental: number) => rental * 0.4 * 12;

    static mortgageCredit = (mortgageCredit: number) => mortgageCredit * 12;

    static domesticEmployee = (domesticEmployee: number) => domesticEmployee * 12;

    static aports = (salary: number) => Formula.salaryGrossAnual(salary) * 0.17;

    static salaryGrossAnual = (salary: number) => salary * 13;

    static salaryNetMonth = (salary: number, anualTax: number) =>
        salary * 0.83 - anualTax / 12;

}

export default Formula;