import React, { useState } from 'react';
import { Link } from 'gatsby';
import { getLangPath } from '../utils/lang';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './nav.scss';
import FacebookIcon from './icons/facebook-icon';

// const Nav = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         strapiGlobal {
//           siteName
//         }
//         allStrapiCategory {
//           edges {
//             node {
//               slug
//               name
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <div>
//         <div>
//           <nav className="uk-navbar-container" data-uk-navbar>
//             <div className="uk-navbar-left">
//               <ul className="uk-navbar-nav">
//                 <li>
//                   <Link to="/">{data.strapiGlobal.siteName}</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="uk-navbar-right">
//               <button
//                 className="uk-button uk-button-default uk-margin-right"
//                 type="button"
//               >
//                 Categories
//               </button>
//               <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
//                 <ul className="uk-nav uk-dropdown-nav">
//                   {data.allStrapiCategory.edges.map((category, i) => (
//                     <li key={`category__${category.node.slug}`}>
//                       <Link to={`/category/${category.node.slug}`}>
//                         {category.node.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     )}
//   />
// );

const Nav = ({ lang, path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { strapiGlobalSettings } = useStaticQuery(query);

  const sources = [
    strapiGlobalSettings.logoMobile.childImageSharp.fixed,
    {
      ...strapiGlobalSettings.Logo.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  console.log(sources);

  return (
    <header className="mainHeader">
      <div className="logo">
        <Link to="/">
          <Img fixed={sources} alt="Premium Sport Horses Logo" />
          <span className="companyName">{strapiGlobalSettings.siteName}</span>
        </Link>
      </div>
      <nav className="mainNav">
        <button
          className="navbarToggler"
          type="button"
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="sr-only">Open Menu</span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`links${isOpen ? ' isOpen' : ''}`} id="menu">
          <ul className="links-list">
            <li>
              <Link to={getLangPath(`/about`, lang)}>{lang === 'PL' ? 'O nas' : 'About us'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/partners`, lang)}>{lang === 'PL' ? 'Nasi Partnerzy' : 'Our Partners'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/horses`, lang)}>{lang === 'PL' ? 'Sprzedaz Koni' : 'Horses for Sale'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/trainings`, lang)}>{lang === 'PL' ? 'Treningi Sportowe' : 'Trainings'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/recreation`, lang)}>{lang === 'PL' ? 'Rekreacja' : 'Recreation'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/breeding`, lang)}>{lang === 'PL' ? 'Hodowla' : 'Breeding'}</Link>
            </li>
            <li>
              <Link to={getLangPath(`/contact`, lang)}>{lang === 'PL' ? 'Kontakt' : 'Contact'}</Link>
            </li>
          </ul>
          <div className="languageSwitcher">
            {lang === 'PL' ? (
              <Link to={getLangPath(path, 'Eng')}>
                English Version
                <span role="img" aria-label="UK Flag">
                  🇬🇧
                </span>
              </Link>
            ) : (
              <Link to={getLangPath(path, 'PL')}>
                Polska wersja
                <span role="img" aria-label="Polish Flag">
                  🇵🇱
                </span>
              </Link>
            )}
          </div>
          <div className="social">
            <a href="https://www.facebook.com/premiumsporthorsesjz">
              <span className="sr-only">Facebook page</span>
              <FacebookIcon /> <span role="img" aria-label="Polish Flag"></span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const query = graphql`
  query {
    strapiGlobalSettings {
      siteName
      Logo {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      logoMobile {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  }
`;

export default Nav;
