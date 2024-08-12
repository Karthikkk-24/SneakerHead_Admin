import PropTypes from 'prop-types';

export default function SmallBox({
    title,
    value,
}: {
    title: string;
    value: number;
}) {
    return (
        <div className="w-full h-52 flex flex-col items-center justify-center gap-2 shadow-xl border-2 text-background rounded-2xl bg-slate-100">
            <h3 className="text-3xl">{title}</h3>
            <h3 className="text-6xl font-semibold">{value}</h3>
        </div>
    );
}

SmallBox.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
};
