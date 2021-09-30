import { Section, Header, GitHubIcon, Subheader, Paragraph } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositoriesStatus, selectRepositories, fetchRepositories } from "../../personalHomepageSlice";
import { useEffect } from "react";
import { Content } from "./Content";
import { githubUsername } from "./githubUsername";


const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <GitHubIcon />
        <Subheader> Portfolio </Subheader>
        <Paragraph>My recent projects</Paragraph>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};

export default Portfolio;