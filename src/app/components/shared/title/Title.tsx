import { FunctionComponent } from "react";

interface TitleProps {
    children: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => (
    <h1 className="text-xl w-full bg-gradient-to-b from-secondary-dark to-secondary-darkest text-white p-2 rounded-tr-md rounded-tl-md font-black">
        {props.children}
    </h1>
);

export default Title;