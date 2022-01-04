interface SummarRowProps {
    title: string;
    value?: {
        label: string;
        className: string;
    }
}

const SummaryRow = (props: SummarRowProps) => (
    <div className="space-x-2 grid grid-cols-2 pt-2 font-bold">
        <h3 className="font-bolder">{props.title}</h3>
        <p className={props.value?.className}>{props.value?.label}</p>
    </div>
);

export default SummaryRow;