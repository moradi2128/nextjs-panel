"use client"
import { useState } from "react"
import { useGetAllCategories } from "@/hooks/useCagetories"
import Loading from "@/common/Loading"
import { useAddProduct } from "@/hooks/useProduct"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import FormAddAndEdit from "@/components/FormAddAndEdit"
import { creteObjectWithValue } from "@/utils/creteObjectWithValue"
import SectionLayout from "@/Layout/SectionLayout"
export const productTextField = [
    { id: 1, label: "عنوان", name: "title" },
    { id: 2, label: "توضیحات", name: "description" },
    { id: 3, label: "اسلاگ", name: "slug" },
    { id: 4, label: "برند", name: "brand" },
    { id: 5, label: "قیمت", name: "price" },
    { id: 6, label: "تخفیف", name: "discount" },
    { id: 7, label: "قیمت بعد از تخفیف", name: "offPrice" },
    { id: 8, label: "موحودی", name: "countInStock" },
    { id: 9, label: "لینک عکس محصول", name: "imageLink" },
]

const addProductPage = () => {
    const router = useRouter()
    const { isLoading, mutateAsync } = useAddProduct()
    const [formValue, setFormValue] = useState(creteObjectWithValue(productTextField, "name"))
    // === tags ===
    const [tags, setTags] = useState([])
    // === categories ===
    const { data, isLoading: isLoadingCategories } = useGetAllCategories()
    const { categories } = data || {}
    const [selectedCategory, setSelectedCategory] = useState(null)
    // === submit Form ===
    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const addProductData = { ...formValue, tags, category: selectedCategory?._id || null }
            const { message } = await mutateAsync(addProductData)
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
    if (isLoadingCategories) return <Loading />
    return (
        <SectionLayout label="اضافه کردن محصول">
            <FormAddAndEdit
                onSubmit={submitFormHandler}
                isLoading={isLoading}
                textFieldArray={productTextField}
                tags={tags}
                setTags={setTags}
                textFiledValue={formValue}
                textFieldChange={onChangeTextFieldHandler}
                select={categories}
                selectedValue={selectedCategory}
                setSelectedValue={setSelectedCategory}
                containerStyle="grid grid-cols-1 md:grid-cols-2 gap-6 items-center space-y-0"
            />
        </SectionLayout>
    )
}

export default addProductPage