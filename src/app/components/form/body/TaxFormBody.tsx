import Section from "app/components/shared/section/Section";
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

const rangeLabel = {
    0: 'Los deduce mi cónyugue',
    50: 'Deducimos mitad cada uno',
    100: 'Deduzco sólo yo'
};

const TaxFormBody: FunctionComponent<TaxFormBodyProps> = (props: TaxFormBodyProps) => (
    <div className="flex flex-col w-full h-full px-1 md:px-4 py-2 space-y-2 ">
        <div className="w-full flex flex-col space-y-2 xl:flex-row xl:space-x-2 xl:space-y-0">
            <Section title="Ingresos">
                <Input symb="$" type="number" label="Salario bruto" onChange={(e) => props.setters.setSalary(+e.target.value)} min={0} />
            </Section>
            <Section title="Deducciones">
                <div className="flex justify-evenly items-center">
                    <Input type="checkbox" label="Cónyuge a cargo" onChange={(e) => props.setters.setSpouse(e.target.checked)} />
                    <Input type="checkbox" label="Jubilado" onChange={(e) => props.setters.setRetired(e.target.checked)} disabled={props.userInput.patagonic} />
                    <Input type="checkbox" label="Zona patagónica" onChange={(e) => props.setters.setPatagonic(e.target.checked)} disabled={props.userInput.retired} />
                </div>
                <div className="flex justify-evenly items-center">
                    <Input type="number" label="Cantidad de hijos" onChange={(e) => props.setters.setChildren(+e.target.value)} min={0} />
                    <Input type="range" label={rangeLabel[props.userInput.childrenDeduction || 0]} onChange={(e) => props.setters.setChildrenDeduction(+e.target.value)} min={0} max={100} step={50} />
                </div>
                <div className="flex flex-col md:flex-row">
                    <Input symb="$" type="number" label="Credito hipotecario" onChange={(e) => props.setters.setMortgageCredit(+e.target.value)} min={0} />
                    <Input symb="$" type="number" label="Alquiler" onChange={(e) => props.setters.setRental(+e.target.value)} min={0} />
                    <Input symb="$" type="number" label="Servicios domésticos" onChange={(e) => props.setters.setDomesticEmployee(+e.target.value)} min={0} />
                </div>
            </Section>
        </div>
        <button className=" bg-gradient-to-b from-success-dark to-success-darkest hover:from-success-dark hover:to-success text-white transition-all duration-200 px-4 py-1 rounded-md w-full font-bold" onClick={props.calculate}>Calcular</button>
    </div>
);

export default TaxFormBody;