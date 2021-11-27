import classes from "./AdsBar.module.scss";

const AdsBar = () => {
    return (
        <div className={classes.container}>
            <span className={classes.title}>
                Ești cabinet de optică medicală? Devino partenerul nostru!
            </span>
        </div>
    );
};

export default AdsBar;
