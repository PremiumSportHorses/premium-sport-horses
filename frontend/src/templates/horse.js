import React from 'react';
import { graphql, Link } from 'gatsby';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { getHorseGenderLabel, getLangPath } from '../utils/lang';
import { horsePrices } from '../utils/prices';

import '../styles/components/horseDetails.scss';
import { useWindowSize } from '../utils/windowSizeHook';

export const query = graphql`
  query HorseQuery($slug: String!) {
    strapiHorse(name: { eq: $slug }) {
      name
      description_langPL
      description_langEng
      description_langPL
      age
      price
      breed_langPL
      breed_langEng
      height
      gender
      level
      image: mainImage {
        publicURL
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      youtubeLink
      Pedigree {
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
    }
  }
`;

const getYoutubeEmbedLink = (link) => {
  if (!link) {
    return null;
  }

  const items = link.split('/');
  return items && `https://www.youtube.com/embed/${items[items.length - 1]}`;
};

const maxVideoWidth = 860;

const Horse = ({ data, pageContext, path }) => {
  const { lang } = pageContext;
  const horse = data.strapiHorse;
  const youtube = getYoutubeEmbedLink(horse.youtubeLink);

  const windowSize = useWindowSize();

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{horse.name}</span>
      </h1>
      <div className="pageDescription">
        <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
      </div>
      <div className="horse-keyInformation">
        <Img fixed={horse.image.childImageSharp.fluid} imgStyle={{ position: 'static' }} />
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
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Poziom' : 'Level'}: </span>
              <span className="value">{horse.level}</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Cena' : 'Price'}: </span>
              <span className="value">{horsePrices[horse.price]}</span>
            </div>
          </div>
        </div>
      </div>

      {horse.Pedigree && (
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
                  <span className="label">{horse.Pedigree.father}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mother}</span>
                </div>
              </div>
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mothersMother}</span>
                </div>
              </div>
              <div className="table-col">
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersFathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersFathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersMothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.fathersMothersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mothersFathersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mothersFathersMother}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.mothersMothersFather}</span>
                </div>
                <div className="table-cell">
                  <span className="label">{horse.Pedigree.MothersMothersMother}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {youtube && (
        <div className="video">
          <iframe
            title="main video"
            id="ytplayer"
            type="text/html"
            width={windowSize.width < maxVideoWidth ? windowSize.width - 47 : maxVideoWidth}
            height={windowSize.width < maxVideoWidth ? windowSize.width * 0.6 : maxVideoWidth * 0.6}
            src={youtube}
            frameBorder="0"
          ></iframe>
        </div>
      )}
      <Link to={getLangPath(`/horses`, lang)} className="btn-tertiary">
        {lang === 'PL' ? 'Zobacz wszystkie konie' : 'See all horses'}
      </Link>
    </Layout>
  );
};

export default Horse;
