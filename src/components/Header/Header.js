import AdsBar from "./AdsBar";
import NavigationBottom from "./NavigationBottom";
import NavigationTop from "./NavigationTop";

const Header = () => {
    return (
        <header>
            <AdsBar />
            <NavigationTop />
            <NavigationBottom />
        </header>
    );
};

export default Header;
