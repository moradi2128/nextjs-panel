import http from "./httpService";
export function getProducts(queryString, cookies) {
  return http
    .get(`/product/list?${queryString}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
  // return fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/product/list?${queryString}`,
  //   { cache: "no-store" }
  // )
  //   .then((result) => result.json())
  //   .then(({ data }) => data);
}
export function getProductDetailBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
export function getProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}
export function likeProduct(productId) {
  return http.post(`/product/like/${productId}`).then(({ data }) => data.data);
}
export function addProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}
export function updateProduct(data) {
  return http
    .patch(`/admin/product/update/${data.productId}`, data)
    .then(({ data }) => data.data);
}
export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}
