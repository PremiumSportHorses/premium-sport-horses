import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const RecreationPage = (props) => {
  const data = useStaticQuery(query).strapiAboutUs;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'Rekreacja' : 'Recreation'}</span>
      </h1>
      {/* <p className="pageDescription">{data[`Description_lang${lang}`]}</p> */}
      <p className="pageDescription">{lang === 'PL' ? 'Do zrobienia' : 'To Do'}</p>
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

export default RecreationPage;
