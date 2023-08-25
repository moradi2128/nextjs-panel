"use client"
import Loading from '@/common/Loading'
import FormAddAndEdit from '@/components/FormAddAndEdit'
import { useGetAllCategories } from '@/hooks/useCagetories'
import { useGetCouponById, useUpdateCoupon } from '@/hooks/useCoupons'
import { useGetAllProducts } from '@/hooks/useProduct'
import { creteArraytWithValue, creteObjectWithValue } from '@/utils/creteObjectWithValue'
import { includeObj } from '@/utils/objectUtils'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { couponsTextField, typeRadioInput } from '../../add/page'

const editCouponPage = () => {
    const router = useRouter()
    const { isLoading: isLoadingGetProducts, data: productsData } = useGetAllProducts()
    const { products } = productsData || {}
    // === get product by Id ===
    const { id } = useParams()
    const { data: dataCoupon, isLoading } = useGetCouponById(id)
    const { coupon } = dataCoupon || {}
    // === Update fn ===
    const { isLoadingSubmit, mutateAsync } = useUpdateCoupon()

    const [formValue, setFormValue] = useState(creteObjectWithValue(couponsTextField, "name"))
    const [type, setType] = useState("percent")
    const [selectedProducts, setSelectedProducts] = useState([])
    const [expireDate, setExpireDate] = useState(new Date())
    useEffect(() => {
        if (coupon) {
            setType(coupon.type)
            setSelectedProducts(coupon?.productIds || [])
            setExpireDate(coupon.expireDate)
            setFormValue(includeObj(coupon, creteArraytWithValue(couponsTextField, "name")))
        }
    }, [dataCoupon])
    // === submit Form ===
    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const updateCouponData = {
                ...formValue, expireDate: new Date(expireDate).toISOString(),
                productIds: selectedProducts.map((product) => product._id),
                type,
                couponId: coupon._id
            }
            const { message } = await mutateAsync(updateCouponData)
            toast.success(message)
            router.push("/admin/coupons")
        } catch (error) {
            if (error?.response?.data) {
                toast.error(error?.response?.data.message);
            }
        }
    }
    const onChangeTextFieldHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    if (isLoading) return <Loading />
    return (
        <div>
            <h2 className="my-5 font-bold">ویرایش محصول</h2>
            <FormAddAndEdit
                onSubmit={submitFormHandler}
                isLoading={isLoadingSubmit}
                textFieldArray={couponsTextField}
                textFiledValue={formValue}
                textFieldChange={onChangeTextFieldHandler}
                selectLabel="شامل محصولات"
                select={products}
                selectedValue={selectedProducts}
                setSelectedValue={setSelectedProducts}
                selectIsMulti={true}
                radioInputsLabel="نوع تخفیف"
                radioInputArray={typeRadioInput}
                radioInputValue={type}
                setRadioInputValue={setType}
                dateLabel="تاریخ انقضا"
                dateValue={expireDate}
                setDateValue={setExpireDate}
            />
        </div>
    )
}

export default editCouponPage