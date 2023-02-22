import React, { useState, useRef, useEffect } from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "../Technologies/TechnologiesStyles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Education = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    // return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>Education</SectionTitle>
      <List>
        <ListItem>
          <picture>{/* <DiReact size="3rem" /> */}</picture>
          <ListContainer>
            <ListTitle>High School:</ListTitle>
            <ListParagraph>
              Economic school, <br />
              Kraljevo
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>{/* <DiFirebase size="3rem" /> */}</picture>
          <ListContainer>
            <ListTitle>Faculty:</ListTitle>
            <ListParagraph>
              University of Belgrade, <br />
              Faculty of Organizational Sciences, <br />
              Information systems and technologies
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>{/* <DiZend size="3rem" /> */}</picture>
          <ListContainer>
            <ListTitle>Master (currently):</ListTitle>
            <ListParagraph>
              University of Belgrade, <br />
              Faculty of Organizational Sciences, <br />
              E-business technologies
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider />
    </Section>
  );
};

export default Education;
