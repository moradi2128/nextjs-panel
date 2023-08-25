export async function setItemAsync(key = "", value = "") {
  if (key) {
    await localStorage.setItem(key, value);
  }
}

export async function getItemAsync(key = "") {
  if (key) {
    return await localStorage.getItem(key);
  }
  return null;
}

export const Product = {
  addProductToCard: async () => {},
  getProducts: async () => {
    var productJson = (await getItemAsync(ProductList)) || "[]";
    var products = JSON.parse(productJson);
  },
};
