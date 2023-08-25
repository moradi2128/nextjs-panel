import { getAllPayment, getOnePayment } from "@/services/paymentService"
import { useQuery } from "@tanstack/react-query"

export const useGetPayment = () => {
    return useQuery({
        queryKey: ["get-payments"],
        queryFn: getAllPayment,
        retry: false
    })
}
export const useGetOnePayment = (id) => {
    return useQuery({
        queryKey: ["get-payments", id],
        queryFn: () => getOnePayment(id),
        retry: false
    })
}
