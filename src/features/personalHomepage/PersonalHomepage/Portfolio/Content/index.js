import GitHubTiles from "./GitHubTiles";
import Loading from "./Loading";
import Error from "./Error";

export const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;
    case "loading":
      return (<Loading />);
    case "error":
      return (<Error />);
    case "success":
      return (<GitHubTiles repositories={repositories} />);
    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
