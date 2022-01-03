import SummaryModel from "lib/model/SummaryModel";
import { FunctionComponent } from "react";
import SummaryRow from "./row/SummaryRow";

export interface SummaryBodyProps {
    summary: SummaryModel;
}

const SummaryBody: FunctionComponent<SummaryBodyProps> = (props: SummaryBodyProps) => (
    <div className="space-y-2 flex flex-col w-full h-full lg:px-4 py-2">
        {props.summary &&
            <div className="text-lg bg-gradient-to-b from-gray-800 to-black px-2 pb-2 space-y-2 divide-y divide-gray-200 text-white flex flex-col w-full rounded-lg">
                <SummaryRow title="Sueldo bruto" value={{ label: props.summary.salary.gross, className: "text-green-200" }} />
                <SummaryRow title="Sueldo en mano" value={{ label: props.summary.salary.net, className: "text-green-200" }} />
                <SummaryRow title="Impuesto anual" value={{ label: props.summary.tax.annual, className: "text-red-300" }} />
                <SummaryRow title="Impuesto mensual" value={{ label: props.summary.tax.month, className: "text-red-300" }} />
            </div >
        }
        <p className="text-black text-right font-bold">Este resultado es una aproximación.</p>
    </div>
);

export default SummaryBody;