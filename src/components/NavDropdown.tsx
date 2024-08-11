import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavDropdown({
    title,
    path,
    active,
    icon,
}: {
    title: string;
    path: string;
    active: boolean;
    icon?: React.ReactNode;
}) {
    return (
        <details
            className={`dropdown flex items-center justify-start text-xl gap-3 ${
                active
                    ? 'bg-primary font-semibold rounded-lg text-background'
                    : 'text-white'
            }`}
        >
            <summary className="btn m-1">{title}</summary>
            <ul
                className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow`}
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </details>
    );
}

NavDropdown.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
};

NavDropdown.defaultProps = {
    title: '',
    path: '',
    active: false,
    icon: null,
};
