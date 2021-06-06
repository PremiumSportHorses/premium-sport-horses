import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import ImageWithText from '../components/imageWithText';

const RecreationPage = (props) => {
  const data = useStaticQuery(query).strapiRecreation;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? data.Title_langPL : data.Title_langEng}</span>
      </h1>
      <p className="pageDescription">{lang === 'PL' ? data.Description_langPL : data.Description_langEng}</p>
      {data.FullWidthImage && (
        <div className="pageImage">
          <Img fluid={data.FullWidthImage.childImageSharp.fluid} />
        </div>
      )}
      <p className="pageDescription">
        {lang === 'PL' ? data.SecondDescription_langPL : data.SecondDescription_langEng}
      </p>
      <h2 className="pageTitle">
        <span>{lang === 'PL' ? data.SecondTitle_langPL : data.SecondTitle_langEng}</span>
      </h2>

      {data.ImageWithText?.map((item) => (
        <ImageWithText key={item.id} item={item} lang={lang} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiRecreation {
      Title_langEng
      Title_langPL
      Description_langEng
      Description_langPL
      FullWidthImage {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      SecondDescription_langEng
      SecondDescription_langPL
      SecondTitle_langEng
      SecondTitle_langPL
      ImageWithText {
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

export default RecreationPage;
