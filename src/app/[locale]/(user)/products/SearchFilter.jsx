"use client"
import TextField from '@/common/TextField'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

const SearchFilter = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search")
        ?.split(",") || []);
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const searchQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()

    }, [searchParams])
    useMemo(() => {
        console.log('searchQueryString("search", searchTerm)', searchQueryString("search", searchTerm))
        router.push(pathname + "?" + searchQueryString("search", searchTerm))
    }, [debouncedSearchTerm])
    return (
        <div className='col-span-2 md:col-span-4'>
            <TextField
                placeholder="جستجو ..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchFilter