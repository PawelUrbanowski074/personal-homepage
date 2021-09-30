import { StyledIcon } from "./styled";
import { ReactComponent as Github } from "./Icons/Github.svg"
import { ReactComponent as Facebook } from "./Icons/Facebook.svg";
import { ReactComponent as LinkedIn } from "./Icons/LinkedIN.svg";
import { ReactComponent as Instagram } from "./Icons/Instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/UrbanowskiPawel",
        Icon: StyledIcon(Github),
    },
    {
        name: "Facebook",
        url: "http://facebook.com",
        Icon: StyledIcon(Facebook),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        Icon: StyledIcon(LinkedIn),
    },
    {
        name: "Instagram",
        url: "http://instagram.com",
        Icon: StyledIcon(Instagram),
    }
]