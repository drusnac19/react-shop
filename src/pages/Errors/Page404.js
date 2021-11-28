import BlankLayout from "../../layouts/BlankLayout";
import classes from "./Page404.module.scss";
import { Link } from "react-router-dom";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
 
const Page404 = () => {
    return (
        <BlankLayout>
            <div className={classes.wrapper}>
                <FontAwesomeIcon icon={faFaceFrown} className={classes.face} />
                <span className={classes.code}>404</span>
                <h1 className={classes.title}>Page not found</h1>

                <div className='text-start mt-4'>
                    <Link to='/' className='text-muted text-decoration-none'>
                        <FontAwesomeIcon
                            icon={faArrowAltCircleLeft}
                            className='me-2 text-primary'
                        />
                        Back to homepage
                    </Link>
                </div>
            </div>
        </BlankLayout>
    );
};

export default Page404;
