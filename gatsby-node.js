/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const res = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  console.log(res);
  if (res.data) {
    res.data.allMarkdownRemark.forEach((node) => {
      const { slug } = node.fields;
      actions.createPage({
        path: slug,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { slug },
      });
    });
  }
};
