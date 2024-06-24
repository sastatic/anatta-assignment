import axios from "axios";
import config from "../config/config.js";
import getProductQuery from "../queries/productQueries.js";

class ShopifyService {
  constructor() {
    this.axiosConfig = config.axios;
  }

  async fetchProducts(query) {
    const gqlQuery = getProductQuery(query);
    const data = JSON.stringify({ query: gqlQuery });
    const axiosConfig = { ...this.axiosConfig, data };

    try {
      const response = await axios.request(axiosConfig);
      const products = response.data.data.products.edges;
      let variants = [];

      products.forEach((product) => {
        product.node.variants.edges.forEach((variant) => {
          variants.push({
            productTitle: product.node.title,
            variantTitle: variant.node.title,
            price: parseFloat(variant.node.price),
          });
        });
      });

      variants.sort((a, b) => a.price - b.price);

      return variants;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
}

export default ShopifyService;
