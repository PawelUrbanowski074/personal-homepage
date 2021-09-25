import GitHubTiles from "./GitHubTiles";
import Heading from "./Heading";
import Loading from "./Loading";
import Error from "./Error";
import { Section } from "./styled";

const Portfolio = () => {

  const status = "success";
  // const status = "loading";
  // const status = "error";

  return (
    <Section>
      <Heading />
      {status === "success" && <GitHubTiles />}
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
    </Section>

  );
};

export default Portfolio;