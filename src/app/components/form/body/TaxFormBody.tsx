import TaxUserInput from "lib/entities/TaxUserInput";
import { FunctionComponent } from "react";
import Input from "../input/Input";

export interface TaxFormBodyProps {
    setters: {
        setSalary: (e: number) => void,
        setSpouse: (e: boolean) => void,
        setRetired: (e: boolean) => void,
        setPatagonic: (e: boolean) => void,
        setChildren: (e: number) => void,
        setChildrenDeduction: (e: any) => void,
        setMortgageCredit: (e: number) => void,
        setRental: (e: number) => void,
        setDomesticEmployee: (e: number) => void,
    },
    userInput: TaxUserInput;
    calculate: () => void;
}

const TaxFormBody: FunctionComponent<TaxFormBodyProps> = (props: TaxFormBodyProps) => (
    <div className="flex flex-col w-full h-full lg:px-4 py-2 space-y-2">
        <div className="w-full">
            <Input symb="$" type="number" label="Salario bruto" onChange={(e) => props.setters.setSalary(+e.target.value)} min={0} />
            <h1 className="text-xl w-full bg-gradient-to-b from-secondary-dark to-green-900 text-white p-2 rounded-tr-md rounded-tl-md font-black">Deducciones</h1>
            <div className="border-2 border-secondary-dark rounded-br-md rounded-bl-md shadow-lg bg-gray-50">
                <div className="flex justify-evenly items-center">
                    <Input type="checkbox" label="Cónyuge a cargo" onChange={(e) => props.setters.setSpouse(e.target.checked)} />
                    <Input type="checkbox" label="Jubilado" onChange={(e) => props.setters.setRetired(e.target.checked)} disabled={props.userInput.patagonic} />
                    <Input type="checkbox" label="Zona patagónica" onChange={(e) => props.setters.setPatagonic(e.target.checked)} disabled={props.userInput.retired} />
                </div>
                <div className="flex justify-evenly items-center">
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
        <button className="border border-black bg-gradient-to-b from-secondary-dark to-green-900 hover:from-secondary-dark hover:to-green-700 text-white transition-all duration-200 px-4 py-1 rounded-md w-full font-bold" onClick={props.calculate}>Calcular</button>
    </div>
);

export default TaxFormBody;