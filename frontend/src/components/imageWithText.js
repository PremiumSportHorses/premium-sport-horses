import React from 'react';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';

import '../styles/components/imageWithText.scss';

const ImageWithText = ({ item, lang }) => {
  return (
    <div className={`imageWithText ${item.Variant}`}>
      <div className="imageWithText-image">
        <Img fluid={item.Image.childImageSharp.fluid} />
      </div>
      <div className="imageWithText-text">
        <Markdown source={item[`Description_lang${lang}`]} escapeHtml={false} />
      </div>
    </div>
  );
};

export default ImageWithText;
