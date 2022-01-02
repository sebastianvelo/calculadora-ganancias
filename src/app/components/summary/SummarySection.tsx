import { FunctionComponent } from "react";
import Title from "../shared/title/Title";
import SummaryBody, { SummaryBodyProps } from "./body/SummaryBody";

interface SummaryProps extends SummaryBodyProps { }

const SummarySection: FunctionComponent<SummaryProps> = (props: SummaryProps) => (
    <div className="w-full h-full justify-center">
        <Title>Resultado</Title>
        <SummaryBody {...props} />
    </div >);

export default SummarySection;