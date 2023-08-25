import { categoryListTHeads } from '@/constants/tableHeads'
import { useRemoveCategory } from '@/hooks/useCagetories'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'

const CategoryTable = ({ categories }) => {
    const queryClient = useQueryClient()
    const { isLoading, mutateAsync } = useRemoveCategory();

    const removeCategoryHandler = async (id) => {
        try {
            const { message } = await mutateAsync(id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-categories"] })
        } catch (error) {
            if (error?.response?.data) {
                toast.error(error?.response?.data.message);
            }
        }
    }
    return (
        <table className="_table">
            <thead className="_thead">
                <tr className="_tr">
                    {(categoryListTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody className='_tbody'>
                {(categories || []).map((category, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td font-bold">{category.title}</td>
                            <td className="_td ">{category.englishTitle}</td>
                            <td className="_td">  {category.description} </td>
                            <td className="_td">{category.type}</td>
                            <td className="_td">
                                <div className='flex gap-4'>
                                    <Link href={`/admin/categories/${category._id}`} className="crud__style detail__icon">
                                        <EyeIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <Link href={`/admin/categories/edit/${category._id}`} className="crud__style edit__icon">
                                        <PencilSquareIcon className='w-5 h-5 text-slate-400' />
                                    </Link>
                                    <button onClick={() => removeCategoryHandler(category._id)} className="crud__style delete__icon">
                                        <TrashIcon className='w-5 h-5 text-red-400' />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CategoryTable