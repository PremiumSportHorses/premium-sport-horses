import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getLangPath } from '../utils/lang';

const Card = ({ lang, horse }) => {
  return (
    <Link to={getLangPath(`/horse/${horse.name}`, lang)} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <Img fixed={horse.mainImage.childImageSharp.fixed} imgStyle={{ position: 'static' }} />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {horse.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
