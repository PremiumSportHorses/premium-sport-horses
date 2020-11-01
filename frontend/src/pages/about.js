import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../assets/css/main.css";

const About = (props) => {
  const data= useStaticQuery(query).strapiAboutUs;
  const lang = props.lang || 'Eng'

  return (
    <div>
      <p>About us</p>
      <h1>{data[`Description_lang${lang}`]}</h1>
    </div>
  );
};

const query = graphql`
  query {
    strapiAboutUs {
      Description_langEng
      Description_langPL
    }
  }
`;

export default About;
