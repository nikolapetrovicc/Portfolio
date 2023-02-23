import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "React.js" },
  { text: "Node.js" },
  { text: "Redux" },
  { text: "Typescript" },
  { text: "JavaScript" },
  { text: "MUI" },
  { text: "MongoDB" },
  { text: "Express" },
  { text: "PostgreSQL" },
  { text: "Git" },
  { text: "Storybook" },
  { text: "Jira" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
