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
      <div className="pageImage">
        <Img fluid={data.Image.childImageSharp.fluid} />
      </div>
      <p className="pageDescription">{data[`Paragraph2_lang${lang}`]}</p>
      <h2 className="pageTitle">
        <span>{data[`Title2_lang${lang}`]}</span>
      </h2>
      <p className="pageDescription">{data[`Paragraph3_lang${lang}`]}</p>
      {data.ImageWithText.map((item) => (
        <ImageWithText key={item.id} item={item} lang={lang} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiOurPartners {
      Title_langEng
      Title_langPL
    }
  }
`;

export default PartnersPage;
