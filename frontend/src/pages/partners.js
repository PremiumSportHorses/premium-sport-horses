import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import ImageWithText from '../components/imageWithText';

const PartnersPage = (props) => {
  const data = useStaticQuery(query).strapiOurPartners;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{data[`Title_lang${lang}`]}</span>
      </h1>
      <p className="pageDescription">{data[`Description_lang${lang}`]}</p>

      {data.Partners?.map((item) => (
        <ImageWithText key={item.id} item={item} lang={lang} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiOurPartners {
      Description_langEng
      Description_langPL
      Title_langEng
      Title_langPL
      Partners {
        Description_langEng
        Description_langPL
        Variant
        id
        Image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default PartnersPage;
