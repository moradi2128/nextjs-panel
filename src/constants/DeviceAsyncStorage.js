export async function setItemAsync(key = "", value = "") {
  if (key) {
    await localStorage.setItem(key, value);
  }
}

export function getItemAsync(key = "") {
  if (key) {
    return localStorage.getItem(key);
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
