import { LinkDescription, Tile, Description, LinkHref, Links, Title, List } from "./styled";

const GitHubTiles = ({ repositories }) => {

  return (
    <List>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Links>
            {!!homepage && (
              <div>
                <LinkDescription>Demo:</LinkDescription>
                <LinkHref target="_blank" rel="noreferrer" href={homepage}>{homepage}</LinkHref>
              </div>
            )}
            <LinkDescription>Code:</LinkDescription>
            <LinkHref target="_blank" rel="noreferrer" href={html_url}>{html_url}</LinkHref>
          </Links>
        </Tile>

      ))}
    </List>
  );
};

export default GitHubTiles;