import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react";

const Formulario = ({setFeedback}) => {
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
            setFeedback({"error" : "The password must have a minimum of 6 characters, 1 symbol, 1 number, and 1 letter."});
            return false;
        }

        if (password !== passwordrepeat) {
            setFeedback({"error" : "Passwords does not match."});
            return false;
        }

        return true;
    };
        
    const onFormChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        setFeedback("");

        if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.passwordrepeat) {
            setFeedback({"error" : "All fields are required."});
            return false;
        }

        if (!isValidEmail(formData.email)) {
            setFeedback({"error" : "Email is not valid."});
            return false;
        }

        if (!isValidPassword(formData.password, formData.passwordrepeat)) {
            return false;
        }

        setFormData(fields);

        setFeedback({"success" : `${formData.name}, your registration has been completed.`});

        return true;
    };

    return (
        <Form onSubmit={registerSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={onFormChange}
                    value={formData.name}
                    autoComplete="off"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    onChange={onFormChange}
                    value={formData.email}
                    autoComplete="off"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    onChange={onFormChange}
                    value={formData.password}
                    autoComplete="off"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control
                    type="password"
                    name="passwordrepeat"
                    onChange={onFormChange}
                    value={formData.passwordrepeat}
                    autoComplete="off"
                />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100 my-3">
                Register
            </Button>
        </Form>
    );
};

export default Formulario;
