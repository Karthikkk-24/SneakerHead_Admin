import PropTypes from 'prop-types';
import React from 'react';
import NavItem from './NavItem';

export default function Sidebar({ currentPath }: { currentPath: string }) {
    return (
        <div className="w-full h-full flex flex-col items-start justify-center p-5 gap-4 bg-background rounded-2xl">
            <NavItem title="Home" path={'/'} active={currentPath === '/'} />
            <NavItem
                title="Projects"
                path={'/projects'}
                active={currentPath === '/projects'}
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
