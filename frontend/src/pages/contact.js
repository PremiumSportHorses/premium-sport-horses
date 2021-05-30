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
        <address className="contactAddress">
          <span>ul. Środkowa 2</span>
          <span>Zielona Góra - Drzonków</span>
          <a className="btn-tertiary" href="https://www.google.com/maps/place/O%C5%9Brodkowa+2,+66-004+Drzonk%C3%B3w,+Polska/@51.8996495,15.5651912,139m/data=!3m1!1e3!4m8!1m2!2m1!1sul.+O%C5%9Brodkowa+2+Zielona+G%C3%B3ra+-+Drzonk%C3%B3w!3m4!1s0x470611dc3fb813d5:0xf53d4db7e30070f6!8m2!3d51.899855!4d15.5656311">Show on Google Maps</a>
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
