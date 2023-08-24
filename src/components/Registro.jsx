import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

import { useState } from "react";

const Registro = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    return (
        <div className="Registro">
            <div className="text-center">
                <h4>Create an account</h4>

                <SocialButton brand="facebook" />
                <SocialButton brand="github" />
                <SocialButton brand="linkedin" />

                <p>Or use your email</p>
            </div>

            <Formulario setError={setError} setSuccess={setSuccess} />

            {error ? <Alert message={error} type="error" /> : null}

            {success ? <Alert message= {success} type="success" /> : null}
        </div>
    );
};

export default Registro;
