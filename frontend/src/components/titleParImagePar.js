import React from 'react';
import Markdown from 'react-markdown';
import Img from 'gatsby-image';

import '../styles/components/titleParImagePar.scss';

const TitleParImagePar = ({ item, lang }) => {
  return (
    <div className="titleParImagePar">
      <h2 className="pageTitle">
        <span>{item[`Title_lang${lang}`]}</span>
      </h2>
      <div className="titleParImagePar-text pageDescription">
        <Markdown source={item[`Paragraph1_lang${lang}`]} escapeHtml={false} />
      </div>
      <div className="titleParImagePar-image">
        <Img fluid={item.Image.childImageSharp.fluid} />
      </div>
      <div className="titleParImagePar-text pageDescription">
        <Markdown source={item[`Paragraph2_lang${lang}`]} escapeHtml={false} />
      </div>
    </div>
  );
};

export default TitleParImagePar;
