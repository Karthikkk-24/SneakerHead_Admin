import PropTypes from 'prop-types';
import { AiFillHome, AiOutlineContacts, AiOutlineInfoCircle, AiOutlineShopping } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import NavDropdown from './NavDropdown';
import NavItem from './NavItem';

export default function Sidebar({ currentPath }: { currentPath: string }) {
    const masterItems = [
        { name: 'Category', path: '/master/category' },
        { name: 'Product', path: '/master/product' },
        { name: 'User', path: '/master/user' },
    ];

    return (
        <div className="w-full h-full flex flex-col items-start justify-start p-5 space-y-4 rounded-2xl bg-gray-800">
            <h3 className="text-3xl text-center text-primary font-bold">
                SNEAKERHEAD
            </h3>
            <div className="w-full h-0.5 bg-primary"></div>
            <NavItem
                title="Home"
                path="/"
                icon={<AiFillHome />}
                active={currentPath === '/'}
            />
            <NavDropdown
                title="Master"
                items={masterItems}
                active={currentPath.startsWith('/master')}
                icon={<MdOutlineDashboard />}
            />
            <NavItem
                title="Blogs"
                path="/blogs"
                icon={<FaBlog />}
                active={currentPath === '/blogs'}
            />
            <NavItem
                title="Shop"
                path="/shop"
                icon={<AiOutlineShopping />}
                active={currentPath === '/shop'}
            />
            <NavItem
                title="About"
                path="/about"
                icon={<AiOutlineInfoCircle />}
                active={currentPath === '/about'}
            />
            <NavItem
                title="Contact"
                path="/contact"
                icon={<AiOutlineContacts />}
                active={currentPath === '/contact'}
            />
        </div>
    );
}

Sidebar.propTypes = {
    currentPath: PropTypes.string.isRequired,
};