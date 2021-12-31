import SalaryFormula from "lib/salary/SalaryFormula";

namespace DeductionFormula {

    export const getRental = (rental: number) => rental * 0.4 * 12;

    export const getMortgageCredit = (mortgageCredit: number) => mortgageCredit * 12;

    export const getDomesticEmployee = (domesticEmployee: number) => domesticEmployee * 12;

    export const getAports = (salary: number) => SalaryFormula.getSalaryGrossAnnual(salary) * 0.17;

}

export default DeductionFormula;