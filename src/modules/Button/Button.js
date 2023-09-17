import './Button.css';

export const Button = (props) => {

    return (
        <button className={`btn ${props.type}`}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    type: "primary",
    disabled: false
};