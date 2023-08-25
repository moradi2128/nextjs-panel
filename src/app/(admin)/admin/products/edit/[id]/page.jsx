"use client"
import Loading from '@/common/Loading'
import FormAddAndEdit from '@/components/FormAddAndEdit'
import { useGetAllCategories } from '@/hooks/useCagetories'
import { useGetProductById, useUpdateProduct } from '@/hooks/useProduct'
import { creteArraytWithValue, creteObjectWithValue } from '@/utils/creteObjectWithValue'
import { includeObj } from '@/utils/objectUtils'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { productTextField } from '../../add/page'

const editProductPage = () => {
    const router = useRouter()
    // === get product by Id ===
    const { id } = useParams()
    const { data: dataProduct, isLoading } = useGetProductById(id)
    const { product } = dataProduct || {}
    // === Update fn ===
    const { isLoadingSubmit, mutateAsync } = useUpdateProduct()

    const [formValue, setFormValue] = useState(creteObjectWithValue(productTextField, "name"))
    // === tags ===
    const [tags, setTags] = useState(null)
    // === categories ===
    const { data } = useGetAllCategories()
    const { categories } = data || {}
    const [selectedCategory, setSelectedCategory] = useState("")
    useEffect(() => {
        if (product) {
            setTags(product.tags)
            setSelectedCategory(product?.category)
            setFormValue(includeObj(product, creteArraytWithValue(productTextField, "name")))
        }
    }, [dataProduct])
    // === submit Form ===
    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const updateProductData = { ...formValue, tags, category: selectedCategory?._id || null, productId: product._id }
            const { message } = await mutateAsync(updateProductData)
            toast.success(message)
            router.push("/admin/products")
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
                textFieldArray={productTextField}
                tags={tags}
                setTags={setTags}
                textFiledValue={formValue}
                textFieldChange={onChangeTextFieldHandler}
                select={categories}
                selectedValue={selectedCategory}
                setSelectedValue={setSelectedCategory}
            />
        </div>
    )
}

export default editProductPage