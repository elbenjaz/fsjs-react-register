import { useState } from "react";

const Formulario = ({setError, setSuccess}) => {
    const fields = {
        name : "",
        email : "",
        password : "",
        passwordrepeat : ""
    };

    const [formData, setFormData] = useState(fields);

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password, passwordrepeat) => {
        let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError("The password must have a minimum of 6 characters, 1 symbol, 1 number, and 1 letter.");
            return false;
        }

        if (password !== passwordrepeat) {
            setError("Passwords does not match.");
            return false;
        }

        return true;
    };
        
    const onFormChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.passwordrepeat) {
            setError("All fields are required.");
            return false;
        }

        if (!isValidEmail(formData.email)) {
            setError("Email is not valid.");
            return false;
        }

        if (!isValidPassword(formData.password, formData.passwordrepeat)) {
            return false;
        }

        setFormData(fields);

        setSuccess(`${formData.name}, your registration has been completed.`);

        return true;
    };

    return (
        <form onSubmit={registerSubmit}>
            <div className="form-group mb-3">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={onFormChange}
                    value={formData.name}
                    autoComplete="off"
                />
            </div>

            <div className="form-group mb-3">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={onFormChange}
                    value={formData.email}
                    autoComplete="off"
                />
            </div>

            <div className="form-group mb-3">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={onFormChange}
                    value={formData.password}
                    autoComplete="off"
                />
            </div>

            <div className="form-group mb-3">
                <label>Repeat password</label>
                <input
                    type="password"
                    name="passwordrepeat"
                    className="form-control"
                    onChange={onFormChange}
                    value={formData.passwordrepeat}
                    autoComplete="off"
                />
            </div>

            <button type="submit" className="btn btn-success w-100 my-3">Register</button>
        </form>
    );
};

export default Formulario;
