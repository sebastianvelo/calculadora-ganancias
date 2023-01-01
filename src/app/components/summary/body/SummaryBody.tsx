import Section from "app/components/shared/section/Section";
import SummaryModel from "lib/model/SummaryModel";
import { FunctionComponent } from "react";
import SummaryRow from "./row/SummaryRow";

export interface SummaryBodyProps {
    summary: SummaryModel;
}

const SummaryBody: FunctionComponent<SummaryBodyProps> = (props: SummaryBodyProps) => (
    <div className="space-y-2 flex flex-col w-full h-full lg:px-4 py-2 px-1">
        {props.summary &&
            <div className="grid gap-4 lg:grid-cols-3">
                <Section title="Salario">
                    <SummaryRow title="Sueldo bruto" value={{ label: props.summary.salary.gross, className: "text-green-200" }} />
                    <SummaryRow title="Sueldo en mano" value={{ label: props.summary.salary.net, className: "text-green-300" }} />
                </Section>
                <Section title="Ganancias">
                    <SummaryRow title="Mensual" value={{ label: props.summary.tax.month, className: "text-red-300" }} />
                    <SummaryRow title="Anual" value={{ label: props.summary.tax.annual, className: "text-red-300" }} />
                </Section>
                <Section title="Aportes">
                    <SummaryRow title="Jubilación" value={{ label: props.summary.aports.retired, className: "text-red-300" }} />
                    <SummaryRow title="Obra social" value={{ label: props.summary.aports.healthInsurance, className: "text-red-300" }} />
                    <SummaryRow title="Ley 19032 (PAMI)" value={{ label: props.summary.aports.pami, className: "text-red-300" }} />
                    <SummaryRow title="Total" value={{ label: props.summary.aports.total, className: "text-red-500" }} />
                </Section>
            </div>
        }
        <p className="text-black text-right font-bold">Este resultado es una aproximación.</p>
    </div>
);

export default SummaryBody;