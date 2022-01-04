import Title from "app/components/shared/title/Title";
import { FunctionComponent } from "react";

interface SectionProps {
    title: string
    children: React.ReactNode | React.ReactNode[];
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
    <div className="text-lg bg-gradient-to-b from-gray-800 to-black text-white flex flex-col w-full rounded-lg pb-1">
        <Title>{props.title}</Title>
        <div className="px-2">
            {props.children}
        </div>
    </div>
);

export default Section;