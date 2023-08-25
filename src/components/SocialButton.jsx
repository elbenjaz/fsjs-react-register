import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({brand}) => {
    const button = {
        "facebook" : {icon: "fa-brands fa-facebook", url: "https://www.facebook.com"},
        "github"   : {icon: "fa-brands fa-github"  , url: "https://www.github.com"},
        "linkedin" : {icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com"}
    };

    if (!button[brand]) {
        return false;
    }

    return (
        <a className="SocialButton" href={button[brand].url} target="_blank">
            <FontAwesomeIcon icon={button[brand].icon} />
        </a>
    );
};

export default SocialButton;
