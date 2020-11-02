import React from 'react';
import { Link } from 'gatsby';

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

const PlPrefix = 'pl/';

const getLangPath = (path, lang) => {
  if (lang === 'PL' && path.indexOf(PlPrefix) < 0) {
    return `${PlPrefix}${path}`;
  }

  if (lang === 'Eng' && path.indexOf(PlPrefix) >= 0) {
    return path.replace(PlPrefix, '');
  }

  return path;
};

const Nav = ({ lang, path }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Site Name</Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <button className="uk-button uk-button-default uk-margin-right" type="button">
            Categories
          </button>
          <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
            <ul className="uk-nav uk-dropdown-nav">
              <li>
                <Link to={getLangPath(`/about`, lang)}>About us</Link>
              </li>
              <li>
                <Link to={getLangPath(`/horse/Eliot`, lang)}>Eliot</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link to={getLangPath(path, 'Eng')}>English</Link>
      <Link to={getLangPath(path, 'PL')}>Polish</Link>
    </div>
  );
};

export default Nav;
