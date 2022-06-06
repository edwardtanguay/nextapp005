import { NavLink } from './NavLink';

export const Nav = () => {
    return (
        <nav>
            <span>
                <NavLink exact href="/">
                    Welcome
                </NavLink>
            </span>
            <span className="separator">|</span>
            <span>
                <NavLink href="/techItems">Tech Items</NavLink>
            </span>
            <span className="separator">|</span>
            <span>
                <NavLink href="/about">About</NavLink>
            </span>
        </nav>
    );
};
