import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getLangPath } from '../../utils/lang';

import '../../styles/components/card.scss';

const BreedingHorseCard = ({ lang, horse }) => {
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
        <h4 className="card-info">{horse[`description_lang${lang}`]}</h4>

        <div className="table">
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Ojciec' : 'Father'}: </span>
              <span className="value">{horse?.pedigree?.father} </span>
            </div>
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Matka' : 'Mother'}: </span>
              <span className="value">{horse?.pedigree?.mother} </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Rasa' : 'Breed'}: </span>
              <span className="value">{lang === 'PL' ? horse.breed_langPL : horse.breed_langEng} </span>
            </div>
            <div className="table-cell">
              <span className="label">{lang === 'PL' ? 'Wzrost' : 'Height'}: </span>
              <span className="value">{horse.height} </span>
            </div>
          </div>
        </div>
        <p className="card-actions">
          <Link to={getLangPath(`/breeding/${horse.name}`, lang)}>
            <span className="btn-more">{lang === 'PL' ? 'Zobacz więcej' : 'Read more'}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BreedingHorseCard;
