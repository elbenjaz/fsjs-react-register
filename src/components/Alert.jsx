const Alert = ({message, type}) => {
    const alert = {
        "error"   : "alert-danger",
        "success" : "alert-success",
    };

    return (
        <div className={`alert ${alert[type]} text-center`} role="alert">
            {message}
        </div>
    );
};

export default Alert;
