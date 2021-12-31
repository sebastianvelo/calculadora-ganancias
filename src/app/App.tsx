import UserInputTax from "lib/config/UserInputTax";
import Tax from "lib/Tax";
import TaxSummary from "lib/TaxSummary";
import { FunctionComponent, useState } from "react";
import Form from "./components/form/Form";
import Summary from "./components/summary/Summary";
import configTax from "./tax/configTax";

const App: FunctionComponent = () => {
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

    const getUserInput = (): UserInputTax => ({
        salary, spouse, retired, patagonic, children, childrenDeduction, rental, mortgageCredit, domesticEmployee
    })

    const calculate = () => setSummary(Tax.getSummary(getUserInput(), configTax))

    return (
        <div className="flex flex-col lg:h-screen w-full">
            <main className="flex lg:flex-row flex-col h-full w-full bg-blue-50">
                <Form userInput={getUserInput()} setters={setters} calculate={calculate} />
                <Summary summary={summary} />
            </main>
            <footer className="bg-secondary-light h-8 w-full px-2 flex items-center justify-end font-bold text-sm">
                <a target="_blank" href="https://www.linkedin.com/in/sebastian-velo/">Hecho con ♥ por Sebastian Velo</a>
            </footer>
        </div>
    )
};

export default App;
