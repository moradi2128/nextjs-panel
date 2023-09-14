"use client"

import InfoAvatar from '@/components/InfoAvatar'
import clsx from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { tagsData } from '../../../../../dummy'
import avatarImg from "../../../../../public/assets/images/avatar.jpg"
import coverImg from "../../../../../public/assets/images/blog-detail-banner.webp"
import CardAcademyLayout from '@/Layout/CardAcademyLayout'
import AcademyCategories from '../Aside/AcademyCategories'
import AcademyTags from '../Aside/AcademyTags'
import LastPost from '../LastPost/LastPost'
const page = () => {
    // const params = useParams();

    return (
        <div className="container mt-8">
            <div className='h-[60vh] w-full rounded-xl overflow-hidden mb-16 shadow-light'>
                <Image src={coverImg} className="w-full h-full object-cover" />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-6 gap-6">
                <div className="md:col-span-4">
                    {/* === owner Info === */}
                    <div className="mb-5 space-y-2">
                        <h1 className="text-3xl font-bold dark:text-gray-200">چگونه گوشی آیفون را ریست کنیم ؟!</h1>
                        <div>
                            <InfoAvatar name="محمدرضا مرادی" date={new Date()} url={avatarImg} />
                        </div>
                    </div>
                    {/* === content === */}
                    <aside className={clsx(
                        "mb-10",
                        "prose-lg",
                        "prose-p:text-justify prose-p:text-gray-500 dark:prose-p:text-gray-400 ",
                        "prose-blockquote:p-0 prose-blockquote:text-gray-600 prose-blockquote:pr-6 prose-blockquote:border-r-2 prose-blockquote:border-gray-300 prose-blockquote:border-l-0",
                        "prose-a:text-primary-600 prose-a:font-bold hover:prose-a:text-primary-900",
                        "prose-img:rounded-xl",
                    )}>
                        <Image src={coverImg} className="w-full h-full object-cover" />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <blockquote>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </blockquote>
                        <ul>
                            <li>متن تستی</li>
                            <li>متن تستی</li>
                            <li>متن تستی</li>
                            <li>متن تستی</li>
                        </ul>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p>
                            لورم ایپسوم متن ساختگی با <a href="/">تولید سادگی نامفهوم </a>از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </aside>
                    {/* === tags === */}
                    <AcademyTags tags={tagsData} />
                </div>
                {/* === article === */}
                <div className="md:col-span-2 space-y-6">
                    <LastPost />
                    <CardAcademyLayout title='دسته بندی' className="pb-0">
                        <AcademyCategories />
                    </CardAcademyLayout>
                </div>
            </div>
        </div>
    )
}

export default page