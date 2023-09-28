"use client"
import RadioInput from '@/common/RadioInput'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
const sortOption = [
    { _id: 1, value: "latest", label: "جدید ترین" },
    { _id: 2, value: "earliest", label: "قدیمی ترین" },
    { _id: 3, value: "popular", label: "محبوب ترین" },
]
const ProductSort = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [selectedSort, setSelectedSort] = useState("latest");
    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()

    }, [searchParams])
    const sortHandler = (e) => {
        const { value } = e.target
        setSelectedSort(value)
        router.push(pathname + "?" + createQueryString("sort", value))
    }
    useEffect(() => {
        setSelectedSort(searchParams.get("sort") || "latest")
    }, [searchParams])
    return (
        <div className="col-span-2 md:col-span-4">
            <h2 className='font-bold text-lg mb-5'>مرتب سازی</h2>
            <ul className='space-y-6'>
                {
                    (sortOption || []).map((sort) => {
                        return <RadioInput
                            key={sort._id}
                            id={sort._id}
                            value={sort.value}
                            name="product-sort"
                            label={sort.label}
                            checked={selectedSort === sort.value}
                            onChange={sortHandler}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductSort