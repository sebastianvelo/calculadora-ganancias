import { FunctionComponent } from "react";

interface InputProps {
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
    <div className="flex flex-col p-2 items-center w-full space-y-2">
        <label className="text-xs md:text-lg font-bold">{props.label}</label>
        <div className="w-full flex">
            {props.symb && <div className="border border-black bg-secondary-light text-white w-8 flex items-center justify-center">{props.symb}</div>}
            <input defaultValue={0} className="border border-black p-2 w-full" type={props.type} onChange={props.onChange} min={props.min} max={props.max} step={props.step ?? 1} disabled={props.disabled} />
        </div>
    </div>
);

export default Input;