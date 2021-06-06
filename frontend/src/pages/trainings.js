import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import TitleParImagePar from '../components/titleParImagePar';

const TrainingsPage = (props) => {
  const data = useStaticQuery(query).strapiTrainings;
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    <Layout lang={lang} path={path}>
      {data.Section?.map((section) => (
        <TitleParImagePar item={section} lang={lang} key={section.id} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    strapiTrainings {
      Section {
        id
        Paragraph1_langEng
        Paragraph1_langPL
        Paragraph2_langEng
        Paragraph2_langPL
        Title_langEng
        Title_langPL
        Image {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default TrainingsPage;
