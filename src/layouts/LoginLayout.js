//components
import Footer from "../components/Footer/Footer";

const LoginLayout = (props) => {
    return (
        <>
            {props.children}
            <Footer />
        </>
    );
};

export default LoginLayout;
