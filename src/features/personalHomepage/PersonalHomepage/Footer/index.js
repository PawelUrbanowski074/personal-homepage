import { Wrapper, LetsTalk, Mail, Description } from "./styled";
import { email } from "../email";
import SocialMedia from "./Socials";

const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's Talk!</LetsTalk>
    <Mail href={`mailto:${email}`}>{email}</Mail>
    <Description>
      I’m always open to new projects whenever I have the time. If you have a&nbsp;website, dashboard or mobile app in mind and need some help to&nbsp;make your ideas come to life, feel free to contact me.
    </Description>
    <SocialMedia/>
  </Wrapper>
); 

export default Footer;