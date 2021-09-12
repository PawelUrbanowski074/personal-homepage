import pawel from "../../images/pawel.jpg";
import { Description, Hero, HireMeButton, HireMeIcon, Image, Name, ThisIs, Tile } from "./styled";

const HeroInfo = () => (
  <Tile>
    <Image src={pawel} alt="" />
    <Hero>
      <ThisIs>THIS IS</ThisIs>
      <Name>Paweł Urbanowski</Name>
      <Description>
        Opis moj. asd asd asd asd asfsdv asdf asd awfASD sf WDSFC ASDF wfe ASD wg QFWD wfe WF wge asD agf seg QW
      </Description>
      <HireMeButton>
        <HireMeIcon/>
        Hire Me
      </HireMeButton>
    </Hero>
  </Tile>

);

export default HeroInfo;