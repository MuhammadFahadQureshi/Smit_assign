"use client"
// components/NavLink.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children, ...props }) => {
    const { asPath } = useRouter(); // Get the current path from the router

    // Check if the link is active
    const isActive = asPath === href;

    return (
        <Link href={href} {...props}>
            <a className={isActive ? 'active' : ''}>{children}</a>
        </Link>
    );
};

export default NavLink;
