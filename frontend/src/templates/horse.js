import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export const query = graphql`
  query HorseQuery($slug: String!) {
    strapiHorse(name: { eq: $slug }) {
      name
      description_langPL
      description_langEng
      image: mainImage {
        publicURL
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  }
`;

const Horse = ({ data, pageContext, path }) => {
  const { lang } = pageContext;
  const horse = data.strapiHorse;

  return (
    <Layout lang={lang} path={path}>
      <h1>{horse.name}</h1>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <Img fixed={horse.image.childImageSharp.fixed} imgStyle={{ position: 'static' }} />
        </div>
      </div>
    </Layout>
  );
};

export default Horse;
