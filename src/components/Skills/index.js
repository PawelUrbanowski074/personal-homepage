import { Section, Header, List, Item, Bullet } from "./styled";

const Skills = ({ header, skills }) => (
  <Section>
    <Header>{ header }</Header>
    <List>
      {skills.map(skill => 
      <Item key={skill}>
        <Bullet/>
        {skill}
      </Item>
      )}
    </List>
  </Section>
);

export default Skills;