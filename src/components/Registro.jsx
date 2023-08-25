import Feedback from "./Feedback";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

import { useState } from "react";

const Registro = () => {
    const [feedback, setFeedback] = useState("");

    return (
        <div className="Registro">
            <div className="text-center">
                <h4>Create an account</h4>

                <SocialButton brand="facebook" />
                <SocialButton brand="github" />
                <SocialButton brand="linkedin" />

                <p>Or use your email</p>
            </div>

            <Formulario setFeedback={setFeedback} />

            <Feedback feedback={feedback} setFeedback={setFeedback} />
        </div>
    );
};

export default Registro;
