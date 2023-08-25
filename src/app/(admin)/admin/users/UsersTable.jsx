import { userListTHeads } from '@/constants/tableHeads'
import { toLocalDateString } from '@/utils/toLocalDate'
import { PersianNumbers } from '@/utils/toPersianNumber'
import Link from 'next/link'
import React from 'react'

const UsersTable = ({ users }) => {
    return (
        <table className="_table">
            <thead className="_thead">
                <tr>
                    {(userListTHeads || []).map((item) => {
                        return <th scope="col" className="_th" key={item.id}>{item.label}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {(users || []).map((user, index) => {
                    return (
                        <tr key={index} className="_tr" >
                            <td className="_td">{index}</td>
                            <td className="_td  font-bold">{user.name}</td>
                            <td className="_td ">{user.email}</td>
                            <td className="_td">
                                <div >
                                    <span className='block'>{PersianNumbers(user.phoneNumber)}</span>
                                    <span
                                        className={`'text-center' ${user.isVerifiedPhoneNumber ? "text-green-500" : "text-red-500"}`}
                                    >{user.isVerifiedPhoneNumber ? "تایید شده" : "تایید نشده"}</span>
                                </div>
                            </td>
                            <td className="_td">{toLocalDateString(user.createdAt)}</td>
                            <td className="_td">{user?.cart?.products.length === 0 ?
                                <span>محصولی </span>
                                : user?.cart?.products.map((product) => {
                                    return <div key={product._id}>{product.title}</div>
                                })}</td>
                            <td className="_td">
                                <Link href={`/admin/users/${user._id}`}>مشاهده جزئیات</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UsersTable