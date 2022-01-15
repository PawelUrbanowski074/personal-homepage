import { StyledIcon } from "./styled";
import { ReactComponent as Github } from "./Icons/Github.svg"
import { ReactComponent as Facebook } from "./Icons/Facebook.svg";
import { ReactComponent as LinkedIn } from "./Icons/LinkedIN.svg";
import { ReactComponent as Instagram } from "./Icons/Instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/PawelUrbanowski074",
        Icon: StyledIcon(Github),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100001661339135",
        Icon: StyledIcon(Facebook),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        Icon: StyledIcon(LinkedIn),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/urbanowskipawel/",
        Icon: StyledIcon(Instagram),
    }
]