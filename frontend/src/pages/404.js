import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout lang={'Eng'} path="404">
    <SEO
      seo={{
        metaTitle: '404: Not found',
        metaDescription: 'It looks like you got lost',
      }}
    />
    <h1>To Do</h1>
    <p>This page hasn't been built yet</p>
  </Layout>
);

export default NotFoundPage;
