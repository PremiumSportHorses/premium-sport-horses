import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import BreedingHorseCard from '../components/horseCards/breedingHorseCard';

import '../styles/components/horsesList.scss';

const BreedingPage = (props) => {
  const data = useStaticQuery(query).allStrapiBreedingHorse;
  const lang = props.lang || 'Eng';
  const { path } = props;

  const horses = data.nodes;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'Hoodowla' : 'Breeding'}</span>
      </h1>
      <p className="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt metus. Curabitur ante lorem,
        vulputate id nunc at, aliquet interdum justo. Ut vitae sem ipsum. Integer et tempus neque. Nulla venenatis vitae
        arcu nec euismod. Donec ullamcorper quam eu erat interdum dapibus. Vivamus eleifend dui at tristique tristique.
        Suspendisse massa felis, malesuada non magna vel, varius aliquam purus.
      </p>

      <h2 className="pageTitle with-margin-bottom">
        <span>{lang === 'PL' ? 'Nasze klacze' : 'Our breeding mares'}</span>
      </h2>

      <div className="cardsList">
        {horses.map((horse) => (
          <BreedingHorseCard lang={lang} horse={horse} key={horse.name} />
        ))}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiBreedingHorse(filter: { isHidden: { eq: false } }) {
      nodes {
        description_langEng
        description_langPL
        age
        breed_langPL
        breed_langEng
        height
        gender
        pedigree {
          mother
          father
        }
        mainImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        name
      }
    }
  }
`;

export default BreedingPage;
