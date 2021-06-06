import React from 'react';
import Markdown from 'react-markdown';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import ImageWithText from '../components/imageWithText';

const AboutPage = (props) => {
  const data = useStaticQuery(query).strapiAboutUs;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{data[`Title_lang${lang}`]}</span>
      </h1>
      <div className=" pageDescription">
        <Markdown source={data[`Description_lang${lang}`]} escapeHtml={false} />
      </div>
      {data.Image && (
        <div className="pageImage">
          <Img fluid={data.Image.childImageSharp.fluid} />
        </div>
      )}
      <div className=" pageDescription">
        <Markdown source={data[`Paragraph2_lang${lang}`]} escapeHtml={false} />
      </div>
      <h2 className="pageTitle">
        <span>{data[`Title2_lang${lang}`]}</span>
      </h2>
      <div className=" pageDescription">
        <Markdown source={data[`Paragraph3_lang${lang}`]} escapeHtml={false} />
      </div>
      {data.ImageWithText?.map((item) => (
        <ImageWithText key={item.id} item={item} lang={lang} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiAboutUs {
      Title_langEng
      Title_langPL
      Description_langEng
      Description_langPL
      Paragraph2_langEng
      Paragraph2_langPL
      Title2_langEng
      Title2_langPL
      Paragraph3_langEng
      Paragraph3_langPL
      Image {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ImageWithText {
        id
        Description_langEng
        Description_langPL
        Variant
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

export default AboutPage;
