
"use client"

import Loading from "@/common/Loading"
import FormAddAndEdit from "@/components/FormAddAndEdit"
import { useGetCategoryById, useUpdateCategory } from "@/hooks/useCagetories"
import { creteArraytWithValue, creteObjectWithValue } from "@/utils/creteObjectWithValue"
import { includeObj } from "@/utils/objectUtils"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { categoryTextField, categoryType } from "../../add/page"

const page = () => {
    const { id } = useParams()
    const router = useRouter()
    const { data: dataCategory, isLoading } = useGetCategoryById(id)
    const { category } = dataCategory || {}
    const { isLoadingUpdate, mutateAsync } = useUpdateCategory()

    const [formValue, setFormValue] = useState(creteObjectWithValue(categoryTextField, "name"))
    // === type ===
    const [selectedType, setSelectedType] = useState("")
    useEffect(() => {
        if (category) {
            const findType = categoryType.find((type) => type.value === category?.type)
            setSelectedType(findType)
            setFormValue(includeObj(category, creteArraytWithValue(categoryTextField, "name")))
        }
    }, [dataCategory])
    // === submit Form ===
    const submitFormHandler = async (e) => {
        e.preventDefault();
        try {
            const updateCategoryData = { ...formValue, type: selectedType.value || null, categoryId: category._id }
            const { message } = await mutateAsync(updateCategoryData)
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
    if (isLoading) return <Loading />
    return (
        <div>
            <h2 className="my-5 font-bold">ویرایش دسته بندی</h2>
            <FormAddAndEdit
                onSubmit={submitFormHandler}
                isLoading={isLoadingUpdate}
                textFieldArray={categoryTextField}
                textFiledValue={formValue}
                textFieldChange={onChangeTextFieldHandler}
                select={categoryType}
                selectedValue={selectedType}
                setSelectedValue={setSelectedType}
            />
        </div>
    )
}

export default page