export function formatProduct(product) {
    return {
      ...product,
      priceFormatted: `$${(product.priceCents / 100).toFixed(2)}`,
      starsUrl: `images/ratings/rating-${product.rating.stars * 10}.png`,
      extraInfo: product.type === 'clothing' ? product.sizeChartLink : null
    };
  }
  