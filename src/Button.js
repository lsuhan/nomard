import PropTypes from "prop-types";
import styles from './Button.module.css';

function Button({counter, onClick}) {

    return <button onClick={onClick} className={styles.btn}>{counter}</button>
}

Button.propTypes = {
    counter: PropTypes.number.isRequired,
};

export default Button;
