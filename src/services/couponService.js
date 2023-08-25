import { filterPropertyObj } from "@/utils/filterPropertyObj";
import http from "./httpService";

export function geAllCoupon() {
  return http.get("/admin/coupon/list").then(({ data }) => data.data);
}
export function addNewCoupon(data) {
  return http.post("/admin/coupon/add", data).then(({ data }) => data.data);
}
export function removeCoupon(id) {
  return http
    .delete(`/admin/coupon/remove/${id}`)
    .then(({ data }) => data.data);
}
export function updateCoupon(data) {
  const filterId = filterPropertyObj(data, "couponId");
  return http
    .patch(`/admin/coupon/update/${data.couponId}`, filterId)
    .then(({ data }) => data.data);
}

export function getCouponById(id) {
  return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
}
