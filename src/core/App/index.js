import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { themeLight, themeDark } from "../../theme";
import { GlobalStyle } from "./globalStyle";
import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeLight : themeDark}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
