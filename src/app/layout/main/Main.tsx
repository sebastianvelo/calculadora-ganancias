import TaxSummary from "lib/entities/TaxSummary";
import TaxUserInput from "lib/entities/TaxUserInput";
import Tax from "lib/Tax";
import getTaxSummaryModel from "lib/view/getTaxSummaryModel";
import { FunctionComponent, useState } from "react";
import Form from "app/components/form/Form";
import Summary from "app/components/summary/Summary";
import taxConfig from "app/tax/taxConfig";

const Main: FunctionComponent = () => {
    const [salary, setSalary] = useState<number>(0);
    const [spouse, setSpouse] = useState<boolean>(false);
    const [retired, setRetired] = useState<boolean>(false);
    const [patagonic, setPatagonic] = useState<boolean>(false);
    const [children, setChildren] = useState<number>(0);
    const [childrenDeduction, setChildrenDeduction] = useState<0 | 50 | 100>(0);
    const [rental, setRental] = useState<number>(0);
    const [mortgageCredit, setMortgageCredit] = useState<number>(0);
    const [domesticEmployee, setDomesticEmployee] = useState<number>(0);
    const [summary, setSummary] = useState<TaxSummary | null>();

    const setters = {
        setSalary, setSpouse, setRetired, setPatagonic, setChildren, setChildrenDeduction, setRental, setMortgageCredit, setDomesticEmployee
    }

    const getUserInput = (): TaxUserInput => ({
        salary, spouse, retired, patagonic, children, childrenDeduction, rental, mortgageCredit, domesticEmployee
    })

    const calculate = () => setSummary(Tax.getSummary(getUserInput(), taxConfig))

    return (
        <main className="flex xl:flex-row flex-col h-full w-full bg-gradient-to-bl from-green-50 to-green-200">
            <Form userInput={getUserInput()} setters={setters} calculate={calculate} />
            <Summary summary={getTaxSummaryModel(summary)} />
        </main>
    )
};

export default Main;
