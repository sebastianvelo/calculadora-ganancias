import TaxSummary from "lib/TaxSummary";
import { FunctionComponent } from "react";

interface SummaryProps {
    summary?: TaxSummary | null;
}

const SummaryRow = (props: { children: React.ReactElement[] }) => (<div className=" space-x-2 grid grid-cols-2 pt-2">
    {props.children}
</div>)

const Summary: FunctionComponent<SummaryProps> = (props: SummaryProps) => (
    <div className="bg-blue-100 w-full h-full px-2 py-4 space-y-2 justify-center">
        <h2 className="font-bold text-3xl">Resumen</h2>
        {props.summary &&
            <div className="text-lg bg-gray-900 px-2 pb-2 space-y-2 divide-y divide-y-white rounded-md text-white">
                <SummaryRow>
                    <h3 className="font-bold">Sueldo bruto</h3>
                    <p className="text-green-200">${props.summary.salary.gross}</p>
                </SummaryRow>
                <SummaryRow>
                    <h3 className="font-bold">Sueldo en mano</h3>
                    <p className="text-green-200">${props.summary.salary.net}</p>
                </SummaryRow>
                <SummaryRow>
                    <h3>Impuesto anual</h3>
                    <p className="text-red-300">${props.summary.tax.anual}</p>
                </SummaryRow>
                <SummaryRow>
                    <h3>Impuesto mensual</h3>
                    <p className="text-red-300">${props.summary.tax.month}</p>
                </SummaryRow>
                <SummaryRow>
                    <h3>Piso</h3>
                    <p className="text-red-200">${props.summary.tax.floor}</p>
                </SummaryRow>
                <SummaryRow>
                    <h3>Alicuota</h3>
                    <p className="text-green-300">{props.summary.tax.aliquote}%</p>
                </SummaryRow>
            </div>
        }
    </div>);

export default Summary;