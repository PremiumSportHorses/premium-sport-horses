import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = (props) => {
  const data = useStaticQuery(query).strapiAboutUs;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'O nas' : 'About us'}</span>
      </h1>
      <p className="pageDescription">{data[`Description_lang${lang}`]}</p>
    </Layout>
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

export default AboutPage;
