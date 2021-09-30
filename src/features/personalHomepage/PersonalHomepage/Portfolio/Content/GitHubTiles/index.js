import { LinksValue, LinksRow, Tile, Description, LinkHref, Links, Title, List } from "./styled";

const GitHubTiles = ({ repositories }) => {

  return (
    <List>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Links>
            {!!homepage && (
              <LinksRow>
                <dt>Demo:</dt>
                <LinksValue>
                  <LinkHref target="_blank" rel="noreferrer" href={homepage}>{homepage}</LinkHref>
                </LinksValue>
              </LinksRow>
            )}
            <LinksRow>
              <dt>Code:</dt>
              <LinksValue>
                <LinkHref target="_blank" rel="noreferrer" href={html_url}>{html_url}</LinkHref>
              </LinksValue>
            </LinksRow>
          </Links>
        </Tile>
      ))}
    </List>
  );
};

export default GitHubTiles;