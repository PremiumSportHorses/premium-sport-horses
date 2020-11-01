import React from "react";
import { graphql } from "gatsby";
import Markdown from "react-markdown";
import Img from "gatsby-image";


export const query = graphql`
  query HorseQuery($slug: String!) {
    strapiHorse(name: { eq: $slug }) {
      name
      description_langPL
      description_langEng
      image: mainImage {
        publicURL
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
`;

const Horse = ({ data, pageContext}) => {
  const { lang }  = pageContext;
  const horse = data.strapiHorse;

  return (
      <div>
        <h1>{horse.name}</h1>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
            <hr className="uk-divider-small" />
            <Img
              fixed={horse.image.childImageSharp.fixed}
              imgStyle={{ position: "static" }}
            />
          </div>
        </div>
      </div>
  );
};

export default Horse;
