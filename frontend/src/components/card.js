import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getLangPath, getHorseGenderLabel } from '../utils/lang';
import { horsePrices } from '../utils/prices';

import '../styles/components/card.scss';

const Card = ({ lang, horse }) => {
  return (
    <div className={`card${horse.isSold ? ' isSold' : ''}`}>
      <div className="card-image">
        <Img fluid={{ ...horse.mainImage.childImageSharp.fluid, aspectRatio: 1.5 }} />
      </div>
      <div className="card-description">
        <h3 className="card-title">
          <Link to={getLangPath(`/horse/${horse.name}`, lang)}>
            <span className="horse-name">{horse.name}</span>{' '}
          </Link>
          <span className="horse-sold">{lang === 'PL' ? 'Sprzedany' : 'Sold'}</span>
          <span className="horse-available">{lang === 'PL' ? 'Dostępny' : 'Available'}</span>
        </h3>
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
              <span className="value">{horsePrices[horse.price]}</span>
            </div>
          </div>
        </div>
        <p className="card-actions">
          <Link to={getLangPath(`/horse/${horse.name}`, lang)}>
            <span className="btn-more">{lang === 'PL' ? 'Zobacz więcej' : 'Read more'}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
