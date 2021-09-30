import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme, } from "../themeSlice";
import { Wrapper, Button, Text, Switcher, IconWrapper, Icon } from "./styled";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Switcher>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon/>
          </IconWrapper>
        </Switcher>
      </Button>
    </Wrapper>
  );
};

export default ThemeSwitch;