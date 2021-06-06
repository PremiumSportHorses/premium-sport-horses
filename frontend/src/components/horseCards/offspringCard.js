import React from 'react';
import Markdown from 'react-markdown';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getHorseGenderLabel, getLangPath } from '../../utils/lang';

import '../../styles/components/card.scss';

const OffspringCard = ({ lang, horse }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Img fluid={{ ...horse.mainImage.childImageSharp.fluid, aspectRatio: 1.5 }} />
      </div>
      <div className="card-description">
        <h3 className="card-title">
          <Link to={getLangPath(`/breeding/${horse.name}`, lang)}>
            <span className="horse-name">{horse.name}</span>{' '}
          </Link>
        </h3>
        <div className="card-info">
          <Markdown source={horse[`description_lang${lang}`]} escapeHtml={false} />
        </div>

        <div className="table">
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Wiek' : 'Age'}: </span>
              <span className="value">{horse.age} </span>
            </div>
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Rasa' : 'Breed'}: </span>
              <span className="value">{lang === 'PL' ? horse.breed_langPL : horse.breed_langEng} </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Ojciec' : 'Father'}: </span>
              <span className="value">{horse.father} </span>
            </div>
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Płeć' : 'Gender'}: </span>
              <span className="value">{getHorseGenderLabel(horse.gender, lang)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffspringCard;
