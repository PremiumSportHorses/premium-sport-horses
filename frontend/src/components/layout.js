import React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
import Nav from './nav';
import Seo from './seo';
// import Seo from "./seo";
import '../styles/main.scss';

// const Layout = ({ children, seo }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         strapiHomepage {
//           seo {
//             metaTitle
//             metaDescription
//             shareImage {
//               publicURL
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <>
//         <Seo seo={seo} />
//         <Nav />
//         <main>{children}</main>
//       </>
//     )}
//   />
// );

const Layout = ({ children, lang, path }) => (
  <>
    <Seo />
    <Nav lang={lang} path={path} />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
