import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme, } from "../themeSlice";
import { Wrapper, Button, Text, Switcher, IconWrapper, Icon } from "./styled";

const ThemeSwitch = () => {
  const isLightTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Light mode {isLightTheme ? "on" : "off"}</Text>
        <Switcher>
          <IconWrapper moveToRight={isLightTheme}>
            <Icon/>
          </IconWrapper>
        </Switcher>
      </Button>
    </Wrapper>
  );
};

export default ThemeSwitch;