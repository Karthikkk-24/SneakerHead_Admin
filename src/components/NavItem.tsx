import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({
    title,
    path,
    active,
}: {
    title: string;
    path: string;
    active: boolean;
}) {
    return (
        <Link
            to={path}
            className={`w-full h-10 pl-3 ${
                active
                    ? 'bg-primary font-semibold rounded-lg text-background'
                    : 'text-white'
            } flex items-center justify-start text-xl`}
        >
            {title}
        </Link>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    active: PropTypes.bool,
};

NavItem.defaultProps = {
    title: '',
    path: '',
    active: false,
};
