import PropTypes from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import NavDropdown from './NavDropdown';
import NavItem from './NavItem';

export default function Sidebar({ currentPath }: { currentPath: string }) {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start p-5 gap-4 rounded-2xl">
            <h3 className="text-3xl text-center text-primary">
                <strong>SNEAKERHEAD</strong>
            </h3>
            <div className="w-full h-0.5 bg-primary"></div>
            <NavItem
                title="Home"
                path={'/'}
                icon={<AiFillHome />}
                active={currentPath === '/'}
            />
            <NavDropdown
                title="Master"
                path={'/master'}
                active={currentPath === '/'}
            />
            <NavItem
                title="Blogs"
                path={'/blogs'}
                active={currentPath === '/blogs'}
            />
            <NavItem
                title="Shop"
                path={'/shop'}
                active={currentPath === '/shop'}
            />
            <NavItem
                title="About"
                path={'/about'}
                active={currentPath === '/about'}
            />
            <NavItem
                title="Contact"
                path={'/contact'}
                active={currentPath === '/contact'}
            />
        </div>
    );
}

Sidebar.propTypes = {
    currentPath: PropTypes.string,
};
