const SocialButton = ({brand}) => {
    const socialButton = {
        "facebook" : {icon: "fa-brands fa-facebook", url: "https://www.facebook.com"},
        "github"   : {icon: "fa-brands fa-github"  , url: "https://www.github.com"},
        "linkedin" : {icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com"}
    };

    return (
        <a className="SocialButton" href={socialButton[brand].url} target="_blank">
            <i className={socialButton[brand].icon}></i>
        </a>
    );
};

export default SocialButton;
