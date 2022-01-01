import { FunctionComponent } from "react";

interface TitleProps {
    children: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) =>
    <h2 className="font-bold text-3xl bg-gray-900 text-white px-2 py-4 border-b-2 border-secondary">{props.children}</h2>

export default Title;