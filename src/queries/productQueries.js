const getProductQuery = (query) => `
  query {
    products (first: 100, query: "title:*${query}*") {
      edges {
        node {
          title
          variants (first: 100) {
            edges {
              node {
                title
                price
              }
            }
          }
        }
      }
    }
  }
`;

export default getProductQuery;
