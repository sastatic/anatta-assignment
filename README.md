# Anatta Assignment

This Node.js application fetches product variants from Shopify using GraphQL APIs and sorts them by price.

### Setup
1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd shopify-product-fetcher
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment variables:**
   Create a `.env` file in the root directory with your Shopify store URL and access token:
   ```
   SHOPIFY_STORE_URL=your-shopify-store.myshopify.com
   SHOPIFY_ACCESS_TOKEN=your-access-token
   ```

### Usage
To fetch and display product variants for a specific product name:

```bash
node src/app.js --name=product_name
```
Replace `product_name` with the name of the product you want to search for.

### Example
To fetch and display variants for gloves:
```bash
node src/app.js --name=shirt
```

### Notes
- Ensure your Shopify store has the necessary permissions for reading products via the GraphQL API.
- Make sure Node.js (version 14 or above) and npm are installed on your machine.

### Directory Structure
- `src/config/`: Configuration files including Shopify credentials.
- `src/services/`: Service layer handling API requests.
- `src/queries/`: GraphQL query definitions.
- `src/utils/`: Utility functions for display purposes.
- `src/app.js`: Entry point of the application.