import TaxSummaryModel from "lib/model/TaxSummaryModel";
import { FunctionComponent } from "react";
import Title from "../shared/title/Title";
import SummaryRow from "./row/SummaryRow";

interface SummaryProps {
    summary?: TaxSummaryModel | null;
}

const Summary: FunctionComponent<SummaryProps> = (props: SummaryProps) => (
    <div className="w-full h-full space-y-2 justify-center">
        <Title>Resumen</Title>
        {props.summary &&
            <div className="text-lg bg-gray-900 px-2 pb-2 space-y-2 divide-y divide-y-white text-white flex flex-col">
                <SummaryRow title="Sueldo bruto" value={{ label: props.summary.salary.gross, className: "text-green-200" }} />
                <SummaryRow title="Sueldo en mano" value={{ label: props.summary.salary.net, className: "text-green-200" }} />
                <SummaryRow title="Impuesto anual" value={{ label: props.summary.tax.annual, className: "text-red-200" }} />
                <SummaryRow title="Impuesto mensual" value={{ label: props.summary.tax.month, className: "text-red-200" }} />
                <SummaryRow title="Piso" value={{ label: props.summary.tax.floor, className: "text-red-200" }} />
                <SummaryRow title="Sueldo bruto" value={{ label: props.summary.tax.aliquote, className: "text-green-200" }} />
            </div >
        }
    </div >);

export default Summary;