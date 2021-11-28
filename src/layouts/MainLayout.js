//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default MainLayout;
