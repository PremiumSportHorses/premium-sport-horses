import React from 'react';
// import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout';
// import ArticlesComponent from "../components/articles";

const IndexPage = (props) => {
  const lang = props.lang || 'Eng';
  const { path } = props;

  return (
    // <Layout seo={data.strapiHomepage.seo}>
    //   <div className="uk-section">
    //     <div className="uk-container uk-container-large">
    //       <h1>test</h1>
    //       {/* <h1>{data.strapiHomepage.hero.title}</h1> */}
    //       {/* <ArticlesComponent articles={data.allStrapiArticle.edges} /> */}
    //     </div>
    //   </div>
    // </Layout>
    <Layout lang={lang} path={path}>
      <p className="pageDescription">Home - {lang === 'PL' ? 'Do zrobienia' : 'To Do'}</p>
    </Layout>
  );
};

// const query = graphql`
//   query {
//     strapiHomepage {
//       hero {
//         title
//       }
//       seo {
//         metaTitle
//         metaDescription
//         shareImage {
//           publicURL
//         }
//       }
//     }
//     allStrapiArticle(filter: { status: { eq: "published" } }) {
//       edges {
//         node {
//           strapiId
//           slug
//           title
//           category {
//             name
//           }
//           image {
//             childImageSharp {
//               fixed(width: 800, height: 500) {
//                 src
//               }
//             }
//           }
//           author {
//             name
//             picture {
//               childImageSharp {
//                 fixed(width: 30, height: 30) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
