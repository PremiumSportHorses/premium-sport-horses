import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../components/layout';
import Card from '../components/card';
import FilterItem from '../components/filterItem';
import Checkbox from '../components/checkbox';

import '../styles/components/horsesList.scss';

const HorsesPage = (props) => {
  const data = useStaticQuery(query).allStrapiHorse;
  const lang = props.lang || 'Eng';
  const { path } = props;

  const [activePriceFilter, setActivePriceFilter] = useState('showAll');
  const [hideSold, setHideSold] = useState(false);

  const horses = data.nodes.filter(
    (horse) =>
      (activePriceFilter === 'showAll' || activePriceFilter === horse.price) &&
      ((hideSold === true && horse.isSold === false) || hideSold === false)
  );

  const setActivePriceFilterHandler = (value) => {
    const params = new URLSearchParams(props.location.search);
    params.set('price', value);
    navigate(props.location.pathname + '?' + params.toString());
    setActivePriceFilter(value);
  };

  useEffect(() => {
    const price = new URLSearchParams(props.location.search).get('price');

    if (price) {
      setActivePriceFilter(price);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="filtersWrapper">
        <div className="filters">
          <h2 className="label">
            <span>{lang === 'PL' ? 'Przedziały cenowe:' : 'Price Ranges:'}</span>
          </h2>
          <div className="prices">
            <FilterItem
              value="showAll"
              label={lang === 'PL' ? 'wszystkie' : 'all prices'}
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
            <FilterItem
              value="OneStar"
              label={`* ${lang === 'PL' ? 'poniżej' : 'below'} 15 000 EUR`}
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
            <FilterItem
              value="TwoStars"
              label="** 15 000 EUR - 25 000 EUR"
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
            <FilterItem
              value="ThreeStars"
              label="*** 25 000 EUR - 40 000 EUR"
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
            <FilterItem
              value="FourStars"
              label="**** 40 000 EUR - 60 000 EUR"
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
            <FilterItem
              value="FiveStars"
              label={`***** ${lang === 'PL' ? 'powyżej' : 'above'} 60 000 EUR`}
              activeValue={activePriceFilter}
              setActivePriceFilter={setActivePriceFilterHandler}
            />
          </div>
        </div>
        <div className="filters availability">
          <Checkbox
            location={props.location}
            id="hideSold"
            label={lang === 'PL' ? 'ukryj sprzedane' : 'Hide sold'}
            callback={setHideSold}
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
                  activeValue={activePriceFilter}
                  setActivePriceFilter={setActivePriceFilterHandler}
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
                  activeValue={activePriceFilter}
                  setActivePriceFilter={setActivePriceFilterHandler}
                />
              </p>
            </div>
          )}
        </div>
      )}
      <div className="cardsList">
        {horses.map((horse) => (
          <Card lang={lang} horse={horse} key={horse.name} />
        ))}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiHorse(filter: { isHidden: { eq: false } }) {
      nodes {
        description_langEng
        description_langPL
        age
        price
        breed_langPL
        breed_langEng
        height
        gender
        level
        isSold
        mainImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        name
      }
    }
  }
`;

export default HorsesPage;
