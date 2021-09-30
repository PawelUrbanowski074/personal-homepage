import ThemeSwitch from "../../../common/ThemeSwitch";
import HeroInfo from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { skills, nextSkills } from "./Skills/skills";
import { Container } from "./styled";

const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <HeroInfo />
    <Skills
      header="My skillset includes:"
      skills={skills}
    />
    <Skills
      header="What I want to lern next:"
      skills={nextSkills}
    />
    <Portfolio />
    <Footer />
  </Container>
);

export default PersonalHomepage;