class DisplayUtils {
  static displayVariants(variants) {
    variants.forEach((variant) => {
      console.log(
        `${variant.productTitle} - ${
          variant.variantTitle
        } - price $${variant.price.toFixed(2)}`
      );
    });
  }
}

export default DisplayUtils;
