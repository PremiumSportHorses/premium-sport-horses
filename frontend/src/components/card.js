import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getLangPath, getHorseGenderLabel } from '../utils/lang';

import '../styles/components/card.scss';

const Card = ({ lang, horse }) => {
  return (
    <Link to={getLangPath(`/horse/${horse.name}`, lang)} className="card">
      <div className="card-image">
        <Img fixed={horse.mainImage.childImageSharp.fixed} imgStyle={{ position: 'static' }} />
      </div>
      <div className="card-description">
        <h3 className="card-title">{horse.name}</h3>
        <h4 className="card-info">{horse[`description_lang${lang}`]}</h4>

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
              <span className="label">{lang === 'PL' ? 'Wzrost' : 'Height'}: </span>
              <span className="value">{horse.height} </span>
            </div>
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
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Cena' : 'Price'}: </span>
              <span className="value">{horse.price}</span>
            </div>
          </div>
        </div>
        <p className="card-actions">
          <span className="btn-more">{lang === 'PL' ? 'Zobacz więcej' : 'Read more'}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
