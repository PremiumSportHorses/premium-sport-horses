import React from 'react';
import { graphql, Link } from 'gatsby';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { getHorseGenderLabel, getLangPath } from '../utils/lang';
import OffspringCard from '../components/horseCards/offspringCard';

import '../styles/components/horseDetails.scss';

export const query = graphql`
  query BreedingHorseQuery($slug: String!) {
    strapiBreedingHorse(name: { eq: $slug }) {
      name
      description_langPL
      description_langEng
      age
      breed_langPL
      breed_langEng
      height
      gender
      image: mainImage {
        publicURL
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pedigree {
        MothersMothersMother
        father
        mother
        fathersFather
        fathersFathersMother
        fathersFathersFather
        fathersMother
        fathersMothersFather
        fathersMothersMother
        mothersFather
        mothersFathersFather
        mothersFathersMother
        mothersMother
        mothersMothersFather
      }
      offspring {
        age
        breed_langEng
        breed_langPL
        father
        gender
        name
        description_langPL
        description_langEng
        mainImage: image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

const BreedingHorse = ({ data, pageContext, path }) => {
  const { lang } = pageContext;
  const horse = data.strapiBreedingHorse;

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{horse.name}</span>
      </h1>
      <div className="pageDescription">
        <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
      </div>
      <div className="horse-keyInformation">
        <div className="horse-image">
          <Img fluid={horse.image.childImageSharp.fluid} />
        </div>
        <div className="table">
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Wiek' : 'Age'}: </span>
              <span className="value">{horse.age} </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Rasa' : 'Breed'}: </span>
              <span className="value">{lang === 'PL' ? horse.breed_langPL : horse.breed_langEng} </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Wzrost' : 'Height'}: </span>
              <span className="value">{horse.height} </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Płeć' : 'Gender'}: </span>
              <span className="value">{getHorseGenderLabel(horse.gender, lang)}</span>
            </div>
          </div>
        </div>
      </div>

      {horse.pedigree && (
        <div className="pedigree-wrapper">
          <h3 className="sectionTitle">{lang === 'PL' ? 'Rodowód' : 'Pedigree'}</h3>
          <div className="pedigree">
            <div className="table table-pedigree">
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.name} </span>
                </div>
              </div>
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.father}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mother}</span>
                </div>
              </div>
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mothersMother}</span>
                </div>
              </div>
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersFathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersFathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersMothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.fathersMothersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mothersFathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mothersFathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.mothersMothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.pedigree?.MothersMothersMother}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="pageTitle with-margin-bottom">
        <span>{lang === 'PL' ? 'Potomstwo' : 'Offspring'}</span>
      </h2>

      <div className="cardsList">
        {horse.offspring &&
          horse.offspring.map((offspring) => <OffspringCard lang={lang} horse={offspring} key={offspring.name} />)}
      </div>

      <div className="action-items">
        <Link to={getLangPath(`/breeding`, lang)} className="btn-tertiary">
          {lang === 'PL' ? 'Zobacz wszystkie konie hodowlane' : 'See all breeding horses'}
        </Link>
        <Link to={getLangPath(`/horses`, lang)} className="btn-tertiary">
          {lang === 'PL' ? 'Zobacz konie na sprzedaz' : 'See horses for sale'}
        </Link>
      </div>
    </Layout>
  );
};

export default BreedingHorse;
