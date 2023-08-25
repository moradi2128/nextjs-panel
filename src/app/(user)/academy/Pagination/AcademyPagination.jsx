"use client"
import Pagination from '@/components/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
const PAGE_SIZE = 9;
const AcademyPagination = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pageLocation, setPageLocation] = useState(1)
  const [totalResults, setTotalResults] = useState(18);
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    return params.toString()

  }, [searchParams])
  const handlePageClick = (value) => {

    setPageLocation(value)
    router.push(pathname + "?" + createQueryString("page", value))
  }
  useEffect(() => {
    setPageLocation(searchParams.get("page") || 1)
  }, [searchParams])
  return (
    < Pagination
      pageLocation={Number(pageLocation)}
      onPageClick={handlePageClick}
      totalPage={Math.ceil(totalResults / PAGE_SIZE)}
    />
  )
}

export default AcademyPagination