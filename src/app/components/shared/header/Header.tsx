import { FunctionComponent } from "react";

interface HeaderProps {
    children: string;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) =>
    <h1 className="font-bold text-2xl px-4 py-2">{props.children}</h1>

export default Header;