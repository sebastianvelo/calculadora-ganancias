import TaxForm from "app/components/form/TaxForm";
import SummarySection from "app/components/summary/SummarySection";
import taxConfig from "app/tax/taxConfig";
import Calculator from "lib/Calculator";
import Summary from "lib/entities/summary/Summary";
import TaxUserInput from "lib/entities/TaxUserInput";
import getSummaryModel from "lib/view/getTaxSummaryModel";
import { FunctionComponent, useState } from "react";

const Main: FunctionComponent = () => {
    const [salary, setSalary] = useState<number>(0);
    const [spouse, setSpouse] = useState<boolean>(false);
    const [retired, setRetired] = useState<boolean>(false);
    const [patagonic, setPatagonic] = useState<boolean>(false);
    const [children, setChildren] = useState<number>(0);
    const [childrenDeduction, setChildrenDeduction] = useState<(0 | 50 | 100)>(0);
    const [rental, setRental] = useState<number>(0);
    const [mortgageCredit, setMortgageCredit] = useState<number>(0);
    const [domesticEmployee, setDomesticEmployee] = useState<number>(0);
    const [summary, setSummary] = useState<Summary>();

    const setters = {
        setSalary, setSpouse, setRetired, setPatagonic, setChildren, setChildrenDeduction, setRental, setMortgageCredit, setDomesticEmployee
    }

    const getUserInput = (): TaxUserInput => ({
        salary, spouse, retired, patagonic, children, childrenDeduction, rental, mortgageCredit, domesticEmployee
    })

    const calculate = () => setSummary(Calculator.getSummary(getUserInput(), taxConfig))

    /* const demo = (start: number, it: number, size: number) => Array(size).fill("").map((_, i) => {
        const s = ((i + 1) * it) + start;
        const summ = Calculator.getSummary({ salary: s }, taxConfig);
        return [summ.salary.gross, summ.salary.net];
    });
    // console.log(demo(100_000, 10_000, 100));
 */

    return (
        <main className="flex flex-col w-full bg-gradient-to-tr from-white to-blue-100 min-h-screen">
            <TaxForm userInput={getUserInput()} setters={setters} calculate={calculate} />
            <SummarySection summary={getSummaryModel(summary)} />
        </main>
    )
};

export default Main;
