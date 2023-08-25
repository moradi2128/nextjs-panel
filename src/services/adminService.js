import { headers } from "../../next.config";
import http from "./httpService";

// === all users ===
export function getAllUsers(qr) {
  return http.get(`/admin/user/list?${qr}`).then(({ data }) => data.data);
}

// === get user by id ===
export function getUserById(id) {
  return http.get(`/admin/user/${id}`).then(({ data }) => data.data);
}
