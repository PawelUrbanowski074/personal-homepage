import HeroInfo from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Container } from "./styled";
import { skills, nextSkills } from "./components/Skills/skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Container>
      <HeroInfo />
      <main>
        <Skills
          header="My skillset includes:"
          skills={skills}
        />
        <Skills
          header="What I want to lern next:"
          skills={nextSkills}
        />
        <Portfolio/>
        <Contact/>
      </main>
    </Container>
  );
}

export default App;
