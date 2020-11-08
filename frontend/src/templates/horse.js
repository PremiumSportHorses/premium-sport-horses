import React from 'react';
import { graphql, Link } from 'gatsby';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { getLangPath } from '../utils/lang';

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
      <h1 className="pageTitle">
        <span>{horse.name}</span>
      </h1>
      <div className="pageDescription">
        To Do
        <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
        {/* <Img fixed={horse.image.childImageSharp.fixed} imgStyle={{ position: 'static' }} /> */}
        <Link to={getLangPath(`/horses`, lang)} className="btn-tertiary">
          {lang === 'PL' ? 'Zobacz wszystkie konie' : 'See all horses'}
        </Link>
      </div>
    </Layout>
  );
};

export default Horse;
