import pawel from "./pawel.jpg";
import { StyledButtonLink, Description, HireMeIcon, Image, Name, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

const HeroInfo = () => (
  <Wrapper>
    <Image src={pawel} alt="Pawel Urbanowski" />
    <div>
      <ThisIs>This Is</ThisIs>
      <Name>Paweł Urbanowski</Name>
      <Description>
        I’m a passionate Frontend Developer in love with&nbsp;React,currently looking for new job opportunities.
      </Description>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <HireMeIcon/>
        Hire Me
      </StyledButtonLink>
    </div>
  </Wrapper>

);

export default HeroInfo;