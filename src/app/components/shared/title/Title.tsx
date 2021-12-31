import { FunctionComponent } from "react";

interface TitleProps {
    children: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => <h2 className="font-bold text-3xl bg-secondary text-white px-2 py-4">{props.children}</h2>

export default Title;