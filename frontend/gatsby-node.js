exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        horses: allStrapiHorse{
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
  const HorseTemplate = require.resolve("./src/templates/horse.js");

  horses.forEach((horse) => {
    createPage({
      path: `/horse/${horse.node.slug}`,
      component: HorseTemplate,
      context: {
        slug: horse.node.slug,
      },
    });
  });
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "StrapiHorse") {
    const newNode = {
      id: createNodeId(`StrapiHorseContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiHorseContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
