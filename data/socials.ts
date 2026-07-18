import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import profile from "./profile";

const socials = [
    {
        name: "Github",
        href: profile.github,
        icon: FaGithub,
    },

    {
        name: "Linkedin",
        href: "#",
        icon: FaLinkedin,
    },

    {
        name: "Email",
        href: `mailto:${profile.email}`,
        icon: FaEnvelope,
    },
];

export default socials;