"use client"
import { useState } from "react"
import { useAddCategory } from "@/hooks/useCagetories"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import FormAddAndEdit from "@/components/FormAddAndEdit"
import { creteObjectWithValue } from "@/utils/creteObjectWithValue"
import SectionLayout from "@/Layout/SectionLayout"
export const categoryTextField = [
    { id: 1, label: "عنوان", name: "title" },
    { id: 3, label: "عنوان انگلیسی", name: "englishTitle" },
    { id: 2, label: "توضیحات", name: "description" },
]
export const categoryType = [
    { id: 1, label: "محصول", value: "product" },
    { id: 2, label: "پست", value: "post" },
    { id: 3, label: "تیکت", value: "ticket" },
]
const addProductPage = () => {
    const router = useRouter()
    const { isLoading, mutateAsync } = useAddCategory()
    const [formValue, setFormValue] = useState(creteObjectWithValue(categoryTextField, "name"))
    // === type ===
    const [selectedType, setSelectedType] = useState(null)
    // === submit Form ===
    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const addCategoryData = { ...formValue, type: selectedType?.value || null }
            const { message } = await mutateAsync(addCategoryData)
            toast.success(message)
            router.push("/admin/categories")
        } catch (error) {
            if (error?.response?.data) {
                toast.error(error?.response?.data.message);
            }
        }
    }
    const onChangeTextFieldHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    return (
        <SectionLayout label="اضافه کردن دسته بندی">
            <FormAddAndEdit
                onSubmit={submitFormHandler}
                isLoading={isLoading}
                textFieldArray={categoryTextField}
                textFiledValue={formValue}
                textFieldChange={onChangeTextFieldHandler}
                select={categoryType}
                selectedValue={selectedType}
                setSelectedValue={setSelectedType}
                containerStyle="grid grid-cols-1 md:grid-cols-2 gap-4 items-center space-y-0"
            />
        </SectionLayout>
    )
}

export default addProductPage