import { FunctionComponent } from "react";
import Title from "../shared/title/Title";
import TaxFormBody, { TaxFormBodyProps } from "./body/TaxFormBody";

interface TaxFormProps extends TaxFormBodyProps {
}

const TaxForm: FunctionComponent<TaxFormProps> = (props: TaxFormProps) => (
    <form className="w-full flex flex-col border-secondary-dark border-b-2 md:border-b-0">
        <Title>Tus datos</Title>
        <TaxFormBody {...props} />
    </form>
);

export default TaxForm;