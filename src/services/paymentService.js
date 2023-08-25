import http from "./httpService";
export function getAllPayment() {
  return http.get("/admin/payment/list").then(({ data }) => data.data);
}

export function createPayment() {
  return http.post("/payment/create").then(({ data }) => data.data);
}
export function getOnePayment(id) {
  return http.get(`/admin/payment/${id}`).then(({ data }) => data.data);
}
