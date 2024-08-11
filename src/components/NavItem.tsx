import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavItem({
    title,
    path,
    active,
    icon
}: {
    title: string;
    path: string;
    active: boolean;
    icon?: React.ReactNode
}) {
    return (
        <Link
            to={path}
            className={`w-full h-10 pl-3 ${
                active
                    ? 'bg-primary font-semibold rounded-lg text-background'
                    : 'text-white'
            } flex items-center justify-start text-xl gap-3`}
        >
            <span>
                {icon}
            </span>
            <span>
                {title}
            </span>
        </Link>
    );
}

NavItem.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node
};

NavItem.defaultProps = {
    title: '',
    path: '',
    active: false,
    icon: null
};
