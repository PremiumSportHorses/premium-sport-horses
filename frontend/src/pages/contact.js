import React from 'react';
import Markdown from 'react-markdown';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = (props) => {
  const data = useStaticQuery(query).strapiContact;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? data.Title_langPL : data.Title_langEng}</span>
      </h1>
      <div className="pageSection">
        <address className="contactAddress">
          <span className="bold">{data.Name1}</span>
          {data.Tel1 !== 'NA' && (
            <span>
              tel. <a href={`tel:${data.Tel1}`}>{data.Tel1}</a>
            </span>
          )}
          {data.Email1 !== 'NA' && (
            <span>
              email: <a href={`mailto:${data.Email1}`}>{data.Email1}</a>
            </span>
          )}
        </address>
        <address className="contactAddress">
          <span className="bold">{data.Name2}</span>
          {data.Tel2 !== 'NA' && (
            <span>
              tel. <a href={`tel:${data.Tel2}`}>{data.Tel2}</a>
            </span>
          )}
          {data.Email2 !== 'NA' && (
            <span>
              email: <a href={`mailto:${data.Email2}`}>{data.Email2}</a>
            </span>
          )}
        </address>
        <address className="contactAddress">
          <span>{data.AddressLine1}</span>
          <span>{data.AddressLine2}</span>
          <a
            className="btn-tertiary"
            href="https://www.google.com/maps/place/O%C5%9Brodkowa+2,+66-004+Drzonk%C3%B3w,+Polska/@51.8996495,15.5651912,139m/data=!3m1!1e3!4m8!1m2!2m1!1sul.+O%C5%9Brodkowa+2+Zielona+G%C3%B3ra+-+Drzonk%C3%B3w!3m4!1s0x470611dc3fb813d5:0xf53d4db7e30070f6!8m2!3d51.899855!4d15.5656311"
          >
            Show on Google Maps
          </a>
        </address>
        {data[`AdditionalInformation_lang${lang}`] !== 'NA' && (
          <div className=" pageDescription">
            <Markdown source={data[`AdditionalInformation_lang${lang}`]} escapeHtml={false} />
          </div>
        )}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiContact {
      Title_langEng
      Title_langPL
      Name1
      Name2
      Tel1
      Tel2
      Email1
      Email2
      AddressLine1
      AddressLine2
      GoogleMapsLink
      AdditionalInformation_langEng
      AdditionalInformation_langPL
    }
  }
`;

export default ContactPage;
