import { FunctionComponent } from "react";
import Header from "../shared/header/Header";
import SummaryBody, { SummaryBodyProps } from "./body/SummaryBody";

interface SummaryProps extends SummaryBodyProps { }

const SummarySection: FunctionComponent<SummaryProps> = (props: SummaryProps) => (
    <div className="w-full h-full justify-center">
        <Header>Resultado</Header>
        <SummaryBody {...props} />
    </div >
);

export default SummarySection;