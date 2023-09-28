"use client"
import Loading from '@/common/Loading'
import FormAddAndEdit from '@/components/FormAddAndEdit'
import { useAddNewCoupon } from '@/hooks/useCoupons'
import { useGetAllProducts } from '@/hooks/useProduct'
import { creteObjectWithValue } from '@/utils/creteObjectWithValue'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import SectionLayout from '@/Layout/SectionLayout'
export const couponsTextField = [
    { id: 1, label: "کد", name: "code" },
    { id: 2, label: "مقدار(مبلغ)", name: "amount" },
    { id: 3, label: "ظرفیت", name: "usageLimit" },
]
export const typeRadioInput = [
    {
        id: 0,
        name: "type",
        value: "percent",
        label: "درصد"
    },
    {
        id: 1,
        name: "type",
        value: "fixedProduct",
        label: "قیمت ثابت"
    },
]
const page = () => {
    const router = useRouter()
    const { isLoading: isLoadingGetProducts, data: productsData } = useGetAllProducts()
    const { isLoading: isLoadingAddCoupon, mutateAsync } = useAddNewCoupon()
    const { products } = productsData || {}
    const [formValue, setFormValue] = useState(creteObjectWithValue(couponsTextField, "name"))
    const [type, setType] = useState("percent")
    const [selectedProducts, setSelectedProducts] = useState([])
    const [expireDate, setExpireDate] = useState(new Date())

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const dataCoupon = {
                ...formValue,
                expireDate: new Date(expireDate).toISOString(),
                productIds: selectedProducts.map((product) => product._id),
                type
            }
            const { message } = await mutateAsync(dataCoupon)
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
    // console.log('new Date(expireDate).toIS', new Date(expireDate).toISOString())
    if (isLoadingGetProducts) return <Loading />
    return (
        <SectionLayout label="اضافه کردن کد تخفیف">
            <FormAddAndEdit
                onSubmit={submitHandler}
                isLoading={isLoadingAddCoupon}
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
                containerStyle="grid grid-cols-1 md:grid-cols-2 gap-6 items-center space-y-0"
            />
        </SectionLayout>
    )
}

export default page