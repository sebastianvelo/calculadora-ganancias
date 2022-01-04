import { FunctionComponent } from "react";

interface SummaryTableProps {
    title: string
    children: React.ReactNode | React.ReactNode[];
}

const SummaryTable: FunctionComponent<SummaryTableProps> = (props: SummaryTableProps) => (
    <div className="text-lg bg-gradient-to-b from-gray-800 to-black px-2 pb-2 space-y-2 text-white flex flex-col w-full rounded-lg">
        <h1 className="md:text-2xl pt-2 font-black border-b border-white">{props.title}</h1>
        {props.children}
    </div>
);

export default SummaryTable;