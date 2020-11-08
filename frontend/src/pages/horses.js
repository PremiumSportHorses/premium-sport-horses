import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Card from '../components/card';

import '../styles/components/horsesList.scss';
import FilterItem from '../components/filterItem';

const HorsesPage = (props) => {
  const data = useStaticQuery(query).allStrapiHorse;
  const lang = props.lang || 'Eng';
  const { path } = props;

  const [activeFilter, setActiveFilter] = useState('showAll');

  const horses = data.nodes.filter((horse) => activeFilter === 'showAll' || activeFilter === horse.price);

  return (
    <Layout lang={lang} path={path}>
      <h1 className="pageTitle">
        <span>{lang === 'PL' ? 'Konie Na Sprzedaż' : 'Horses For Sale'}</span>
      </h1>
      <p className="pageDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt metus. Curabitur ante lorem,
        vulputate id nunc at, aliquet interdum justo. Ut vitae sem ipsum. Integer et tempus neque. Nulla venenatis vitae
        arcu nec euismod. Donec ullamcorper quam eu erat interdum dapibus. Vivamus eleifend dui at tristique tristique.
        Suspendisse massa felis, malesuada non magna vel, varius aliquam purus.
      </p>
      <div className="filters">
        <h2 className="label">
          <span>{lang === 'PL' ? 'Przedziały cenowe:' : 'Price Ranges:'}</span>
        </h2>
        <div className="prices">
          <FilterItem
            value="showAll"
            label={lang === 'PL' ? 'wszystkie' : 'all prices'}
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <FilterItem
            value="*"
            label={`* ${lang === 'PL' ? 'poniżej' : 'below'} 15 000 EUR`}
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <FilterItem
            value="**"
            label="** 15 000 EUR - 25 000 EUR"
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <FilterItem
            value="***"
            label="*** 25 000 EUR - 40 000 EUR"
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <FilterItem
            value="****"
            label="**** 40 000 EUR - 60 000 EUR"
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <FilterItem
            value="*****"
            label={`***** ${lang === 'PL' ? 'powyżej' : 'above'} 60 000 EUR`}
            activeValue={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
      </div>
      {!horses.length && (
        <div className="noResults">
          {lang === 'PL' ? (
            <div>
              Brak koni o podanym przedziale cenowym w bazie online. Skontaktuj się z nami aby dowiedzieć się o koniach
              z poza oferty online.
              <p>
                <FilterItem
                  className="btn-tertiary"
                  value="showAll"
                  label="pokaz wszystkie przedziały cenowe"
                  activeValue={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </p>
            </div>
          ) : (
            <div>
              There are currently no horses in this price range in our online database. Contact us to find out about
              horses that are not listed online.
              <p>
                <FilterItem
                  className="btn-tertiary"
                  value="showAll"
                  label="view all prices"
                  activeValue={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </p>
            </div>
          )}
        </div>
      )}
      {horses.map((horse) => (
        <Card lang={lang} horse={horse} key={horse.name} />
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiHorse {
      nodes {
        description_langEng
        description_langPL
        age
        price
        mainImage {
          publicURL
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        name
      }
    }
  }
`;

export default HorsesPage;
