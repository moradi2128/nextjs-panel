import { getAllUsers, getUserById } from "@/services/adminService"
import { getUserProfile } from "@/services/authServices"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useGetUser = () => useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus: true
})

export const useGetAllUsers = (qr) => useQuery({
    queryKey: ["get-users"],
    queryFn: () => getAllUsers(qr),
    retry: false,
    refetchOnWindowFocus: true
})

export const useGetUserById = () => {
    return useMutation({ mutationFn: getUserById })
}