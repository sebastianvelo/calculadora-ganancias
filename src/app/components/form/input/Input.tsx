import { FunctionComponent } from "react";

export interface InputProps {
    label: string;
    type: "checkbox" | "number" | "range";
    onChange: (e: any) => void;
    symb?: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => (
    <div className="flex flex-col p-2 items-center justify-between w-full space-y-2 transition-all duration-200">
        <label className="text-xs md:text-lg">{props.label}</label>
        <div className="w-full flex">
            {props.symb && <div className="bg-gradient-to-b from-secondary-dark to-green-900 text-white w-8 flex items-center justify-center">{props.symb}</div>}
            <input defaultValue={0} className="box-border text-black border-2 border-secondary-dark p-2 w-full focus:outline-none focus:border-2 transition-all duration-200" type={props.type} onChange={props.onChange} min={props.min} max={props.max} step={props.step ?? 1} disabled={props.disabled} />
        </div>
    </div>
);

export default Input;