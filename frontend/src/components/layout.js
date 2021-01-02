import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Seo from './seo';

import '../styles/main.scss';
import '../styles/components/layout.scss';

const Layout = ({ children, lang, path }) => (
  <>
    <Seo />
    <Nav lang={lang} path={path} />
    <main className="main">{children}</main>
    <footer className="pageFooter">
      <div className="pageFooter-content">
        <p>© Premium Sport Horses, 2020</p>
      </div>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
