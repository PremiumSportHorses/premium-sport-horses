import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = (props) => {
  const data = useStaticQuery(query).strapiAboutUs;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'Kontakt' : 'Contact'}</span>
      </h1>
      <div className="pageSection">
        <address className="contactAddress">
          <span className="bold">Jan Żmójdzin</span>
          <span>tel. <a href="tel:000000000">000 000 000</a></span>
          <span>email: <a href="mailto:janzmojdzin@gmail.com">janzmojdzin@gmail.com</a></span>
        </address>
        <address className="contactAddress">
          <span className="bold">Justyna Żmójdzin</span>
          <span>tel. <a href="tel:000000000">000 000 000</a></span>
        </address>
      </div>
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

export default ContactPage;
