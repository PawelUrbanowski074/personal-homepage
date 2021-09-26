import { Text, Button, Section, Switcher, IconWrapper, Icon } from "./styled";

const ThemeSwitcher = () => {
  const darkMode = false;

  return (
    <Section>
      <Button>
        <Text>Dark mode {darkMode ? "on" : "off"}</Text>
        <Switcher>
          <IconWrapper moveToRight={darkMode}>
            <Icon/>
          </IconWrapper>
        </Switcher>
      </Button>
    </Section>
  );
};

export default ThemeSwitcher;