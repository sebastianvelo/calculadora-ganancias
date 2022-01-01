import TaxUserInput from "lib/entities/TaxUserInput";
import { FunctionComponent } from "react";
import Title from "../shared/title/Title";
import Input from "./input/Input";

interface FormProps {
    setters: {
        setSalary: (e: any) => void,
        setSpouse: (e: any) => void,
        setRetired: (e: any) => void,
        setPatagonic: (e: any) => void,
        setChildren: (e: any) => void,
        setChildrenDeduction: (e: any) => void,
        setMortgageCredit: (e: any) => void,
        setRental: (e: any) => void,
        setDomesticEmployee: (e: any) => void,
    },
    userInput: TaxUserInput;
    calculate: () => void;
}

const Form: FunctionComponent<FormProps> = (props: FormProps) => (
    <form className="w-full flex flex-col space-y-2 border-r-2 border-secondary border-b-2 md:border-b-0">
        <Title>Tus datos</Title>
        <div className="px-2 flex flex-col space-y-2 w-full">
            <div className="w-full">
                <Input symb="$" type="number" label="Salario bruto" onChange={(e) => props.setters.setSalary(+e.target.value)} min={0} />
                <h1 className="text-xl w-full bg-secondary text-white p-2 rounded-tr-md rounded-tl-md font-black">Deducciones</h1>
                <div className="border-4 border-secondary rounded-br-md rounded-bl-md shadow-lg">
                    <div className="flex justify-evenly items-center">
                        <Input type="checkbox" label="Cónyuge a cargo" onChange={(e) => props.setters.setSpouse(e.target.checked)} />
                        <Input type="checkbox" label="Jubilado" onChange={(e) => props.setters.setRetired(e.target.checked)} disabled={props.userInput.patagonic} />
                        <Input type="checkbox" label="Zona patagónica" onChange={(e) => props.setters.setPatagonic(e.target.checked)} disabled={props.userInput.retired} />
                    </div>
                    <div className="flex flex-row justify-evenly items-center">
                        <Input type="number" label="Cantidad de hijos" onChange={(e) => props.setters.setChildren(+e.target.value)} min={0} />
                        <Input type="range" label={`Deduzco un ${props.userInput.childrenDeduction ?? 0}%`} onChange={(e) => props.setters.setChildrenDeduction(+e.target.value)} min={0} max={100} step={50} />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <Input symb="$" type="number" label="Credito hipotecario" onChange={(e) => props.setters.setMortgageCredit(+e.target.value)} min={0} />
                        <Input symb="$" type="number" label="Alquiler" onChange={(e) => props.setters.setRental(+e.target.value)} min={0} />
                        <Input symb="$" type="number" label="Servicios domésticos" onChange={(e) => props.setters.setDomesticEmployee(+e.target.value)} min={0} />
                    </div>
                </div>
            </div>
            <button className="bg-secondary-light hover:bg-secondary text-white transition-all duration-500 px-4 py-1 rounded-md w-full" onClick={props.calculate}>Calcular</button>
        </div>
    </form>
);

export default Form;