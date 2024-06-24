import ShopifyService from "./services/shopifyService.js";
import DisplayUtils from "./utils/displayUtils.js";

// Get the product name from command line arguments
const productNameArg = process.argv.find((arg) => arg.startsWith("--name"));
const productName = productNameArg ? productNameArg.split("=")[1] : null;

if (!productName) {
  console.error("Please provide a product name using --name argument");
  process.exit(1);
}

const main = async () => {
  const shopifyService = new ShopifyService();
  const variants = await shopifyService.fetchProducts(productName);
  DisplayUtils.displayVariants(variants);
};

main();
