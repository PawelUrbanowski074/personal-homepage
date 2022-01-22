import pawel2 from "./pawel2.jpg";
import { StyledButtonLink, Description, HireMeIcon, Image, Name, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

const HeroInfo = () => (
  <Wrapper>
    <Image src={pawel2} alt="Pawel Urbanowski" />
    <div>
      <ThisIs>This Is</ThisIs>
      <Name>Paweł Urbanowski</Name>
      <Description>
        I’m a passionate Frontend Developer in love with&nbsp;React,currently looking for new job opportunities. <br/>
        I would like to constantly expand my skills, improve my knowledge so that the tasks entrusted to me are professionally carried out within the prescribed time, and the reviewed code is more pleasing to the eye.
      </Description>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <HireMeIcon/>
        Hire Me
      </StyledButtonLink>
    </div>
  </Wrapper>

);

export default HeroInfo;