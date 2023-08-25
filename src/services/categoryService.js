import { filterPropertyObj } from "@/utils/filterPropertyObj";
import http from "./httpService";
export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
export function getCategoryById(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}
export function addCategory(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}
export function removeCategory(id) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
export function updateCategory(data) {
  const filterId = filterPropertyObj(data, "categoryId");
  return http
    .patch(`/admin/category/update/${data.categoryId}`, filterId)
    .then(({ data }) => data.data);
}
