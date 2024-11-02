import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileNav from './MobileNav';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center p-3">
            <Logo />
            <DesktopNav />
            <MobileNav />
        </nav>
    );
};
export default NavBar;
