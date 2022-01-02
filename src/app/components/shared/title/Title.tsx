import { FunctionComponent } from "react";

interface TitleProps {
    children: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) =>
    <h2 className="font-bold text-3xl bg-gradient-to-b from-gray-800 to-black text-white px-2 py-4">{props.children}</h2>

export default Title;