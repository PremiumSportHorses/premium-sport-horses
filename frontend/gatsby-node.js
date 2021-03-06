const createLangPages = (items, template, path, createPage) => {
  items.forEach((item) => {
    createPage({
      path: `pl/${path}/${item.node.slug}`,
      component: template,
      context: {
        slug: item.node.slug,
        lang: 'PL',
      },
    });
  });

  items.forEach((item) => {
    createPage({
      path: `${path}/${item.node.slug}`,
      component: template,
      context: {
        slug: item.node.slug,
        lang: 'Eng',
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        horses: allStrapiHorse(filter: { isHidden: { eq: false } }) {
          edges {
            node {
              strapiId
              slug: name
            }
          }
        }
        breedingHorses: allStrapiBreedingHorse(filter: { isHidden: { eq: false } }) {
          edges {
            node {
              strapiId
              slug: name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create horses pages.
  const horses = result.data.horses.edges;
  const HorseTemplate = require.resolve('./src/templates/horse.js');
  createLangPages(horses, HorseTemplate, 'horse', createPage);

  // Create breeding horses pages.
  const breedingHorses = result.data.breedingHorses.edges;
  const BreedingHorseTemplate = require.resolve('./src/templates/breedingHorse.js');
  createLangPages(breedingHorses, BreedingHorseTemplate, 'breeding', createPage);
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === 'StrapiHorse') {
    const newNode = {
      id: createNodeId(`StrapiHorseContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiHorseContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
