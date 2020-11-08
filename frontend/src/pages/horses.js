import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Card from '../components/card';

const HorsesPage = (props) => {
  const data = useStaticQuery(query).allStrapiHorse;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'Konie Na Sprzedaż' : 'Horses For Sale'}</span>
      </h1>
      {data.nodes.map((horse) => (
        <Card lang={lang} horse={horse} key={horse.name} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiHorse {
      nodes {
        description_langEng
        description_langPL
        mainImage {
          publicURL
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        name
      }
    }
  }
`;

export default HorsesPage;
