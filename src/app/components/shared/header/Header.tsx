import { FunctionComponent } from "react";

interface HeaderProps {
    children: string;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) =>
    <h1 className="font-bold text-3xl bg-gradient-to-b from-gray-800 to-black text-white px-2 py-4">{props.children}</h1>

export default Header;