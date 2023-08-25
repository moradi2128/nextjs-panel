import { addNewCoupon, geAllCoupon, getCouponById, removeCoupon, updateCoupon } from "@/services/couponService"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetAllCoupons = () => {
    return useQuery({
        queryFn: geAllCoupon,
        queryKey: ["get-coupons"],
        retry: false
    })
}
export const useGetCouponById = (id) => {
    return useQuery({
        queryFn: () => getCouponById(id),
        queryKey: ["get-coupon", id],
        retry: false
    })
}
export const useAddNewCoupon = () => {
    return useMutation({ mutationFn: addNewCoupon })
}
export const useRemoveCoupon = () => {
    return useMutation({ mutationFn: removeCoupon })
}
export const useUpdateCoupon = () => {
    return useMutation({ mutationFn: updateCoupon })
}