"use client"

import LinkSectionLayout from "@/components/LinkSectionLayout"
import SideBar from "@/components/SideBar"
import { useGetUser } from "@/hooks/useAuth"
import { toLocalDateStringShort } from "@/utils/toLocalDate"
import { Bars3Icon } from "@heroicons/react/24/outline"
import SectionLayout from "../../../Layout/SectionLayout"
import PaymentTable from "./payments/PaymentTable"

const Profile = () => {
  const { data, isLoading } = useGetUser()
  const { user, payments } = data || {}
  if (isLoading) return <p>loading ...</p>
  return (
    <div>
      <div className="shadow-light p-4 rounded-xl mb-5 flex flex-row gap-3">
        <h1 className="font-bold text-xl">{user.name} | خوش آمدید!
        </h1>
        <p>
          <span>تاریخ عضویت : </span>
          <span>{toLocalDateStringShort(user.createdAt)}</span>
        </p>
      </div>

      <SectionLayout
        label="اخرین سفارشات کاربر"
        link={<LinkSectionLayout href="/profile/payment" >
          مشاهده همه سفارشات</LinkSectionLayout>}
      >
        <div className='overflow-auto my-5'>
          <PaymentTable
            payments={payments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3)} />
        </div>
      </SectionLayout>
    </div>
  )
}

export default Profile