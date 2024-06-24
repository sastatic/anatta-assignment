import dotenv from "dotenv";
dotenv.config();

const config = {
  shopify: {
    storeUrl: process.env.SHOPIFY_STORE_URL,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  },
  axios: {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2024-04/graphql.json`,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
    },
  },
};

export default config;
