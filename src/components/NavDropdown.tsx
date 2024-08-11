import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavDropdown({
    title,
    items,
    active,
    icon,
}: {
    title: string;
    items: { name: string; path: string }[];
    active: boolean;
    icon?: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-10 ${
                    active
                        ? 'bg-primary font-semibold text-background'
                        : 'text-white'
                } flex items-center justify-between rounded-lg text-xl ${
                    isOpen ? 'bg-primary !text-background' : 'text-white'
                }`}
            >
                <div className="flex pl-3 items-center gap-3">
                    <span>{icon}</span>
                    <span>{title}</span>
                </div>
                <span className="pr-3">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>
            {isOpen && (
                <div className="w-full flex flex-col items-start justify-start pt-3 gap-3">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="w-full pl-8 h-10 flex items-center text-white hover:bg-primary hover:text-background hover:rounded-lg text-xl"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

NavDropdown.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
    active: PropTypes.bool,
    icon: PropTypes.node,
};

NavDropdown.defaultProps = {
    active: false,
    icon: null,
};
