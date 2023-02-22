import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionName,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionName>Nikola Petrović | Front End Developer</SectionName>
        <SectionText>
          Experienced Frontend developer, proficient in React.js and Node.js,
          passionate about software engineering.
        </SectionText>
        <Link href="#about">
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
