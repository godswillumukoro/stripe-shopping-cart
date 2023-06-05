const productsArray = [
  {
    id: "price_1NFcUCDXuFJ8qoxSE89TKHHA",
    title: "Top Cafe",
    price: 100,
  },
  {
    id: "price_1NFcVIDXuFJ8qoxSjh2qMIQn",
    title: "Hollandia Yogurt",
    price: 1200,
  },
  {
    id: "price_1NFcWBDXuFJ8qoxSBxdcEPgj",
    title: "Burger King Potata Special",
    price: 4500,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log(`Product with id:${id} does not exist`);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
