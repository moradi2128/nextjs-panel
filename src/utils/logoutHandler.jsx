import { logout } from "@/services/authServices";

export const logoutHandler = async () => {
    await logout();
    localStorage.getItem("userInfo")
    localStorage.getItem("carItems")
    localStorage.getItem("token")
    document.location.href = "/"
}