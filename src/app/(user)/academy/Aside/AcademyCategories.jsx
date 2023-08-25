import clsxm from '@/lib/clsxm'
import Link from 'next/link'
import React from 'react'
import { CategoriesData } from '../../../../../dummy'


const AcademyCategories = () => {
  return (
    <ul>
      {
        (CategoriesData || []).map((category, i) => {
          return <CategoryItem key={category.id} content={category} index={i} />
        })
      }
    </ul>
  )
}

const CategoryItem = ({ content, index }) => {
  const { label, href } = content
  return <li
    className={clsxm(
      "mb-2 border-b border-gray-200 ",
      "last:border-b-0 last:mb-2",
      "hover:text-primary-500 transition-all duration-300")
    } >
    <Link href={`/categories/${href}`} className="block px-2 py-3 ">
      {(index + 1).toString().padStart(2, 0) + "  "}
      {label}
    </Link>
  </li>
}

export default AcademyCategories