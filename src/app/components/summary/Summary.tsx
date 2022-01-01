import TaxSummaryModel from "lib/model/TaxSummaryModel";
import { FunctionComponent } from "react";
import Title from "../shared/title/Title";
import SummaryRow from "./row/SummaryRow";

interface SummaryProps {
    summary?: TaxSummaryModel | null;
}

const Summary: FunctionComponent<SummaryProps> = (props: SummaryProps) => (
    <div className="w-full h-full justify-center">
        <Title>Resumen</Title>
        <div className="space-y-2">
            {props.summary &&
                <div className="text-lg bg-gray-900 px-2 pb-2 space-y-2 divide-y divide-y-blue-50 text-white flex flex-col">
                    <SummaryRow title="Sueldo bruto" value={{ label: props.summary.salary.gross, className: "text-green-200" }} />
                    <SummaryRow title="Sueldo en mano" value={{ label: props.summary.salary.net, className: "text-green-200" }} />
                    <SummaryRow title="Impuesto anual" value={{ label: props.summary.tax.annual, className: "text-red-300" }} />
                    <SummaryRow title="Impuesto mensual" value={{ label: props.summary.tax.month, className: "text-red-300" }} />
                    <SummaryRow title="Alicuota" value={{ label: props.summary.tax.aliquote, className: "text-green-200" }} />
                </div >
            }
            <p className="text-red-300 text-right">Este resultado es una aproximación.</p>
        </div>
    </div >);

export default Summary;