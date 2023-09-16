"use client"

// === Image ===
import img1 from "../../public/assets/images/slider/slider1.png"
import img2 from "../../public/assets/images/slider/slider2.png"


import React, { useRef, useState } from 'react';
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import Button from "@/common/Button";
import shape from "../../public/assets/images/shape.png"
// import './styles.css';
const dataTest = [
    {
        id: 0,
        title: "زیبا",
        subTitle: "استثنایی",
        mainTitle: "کارآمد و خوش دست",
        img: img1,
        btn: [
            {
                id: 0,
                label: "شروع کن",
                href: "/",
                variant: "primary",
            },
            {
                id: 1,
                label: "مشاهده ویدیو",
                href: "/",
                variant: "outline",
                Icon: PlayCircleIcon
            },
        ]
    },
    {
        id: 1,
        title: "خوش دست",
        subTitle: "برند",
        mainTitle: "کارآمد و خوش دست",
        img: img2,
        btn: [
            {
                id: 0,
                label: "شروع کن",
                href: "/",
                variant: "primary"
            },
            {
                id: 1,
                label: "مشاهده ویدیو",
                href: "/",
                variant: "outline",
                Icon: PlayCircleIcon
            },
        ]
    },
]
const BannerMain = () => {
    return (
        <section className="text-3xl">
            <Swiper
                navigation={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                effect={'fade'}
                modules={[EffectFade, Navigation]}
                className="main-slider"
            >
                {(dataTest || []).map((item) => {
                    return <SwiperSlide key={item.id}  >
                        <SliderItem content={item} />
                    </SwiperSlide>

                })}

            </Swiper>
        </section>
    )
}
const SliderItem = ({ content }) => {
    const { title,
        subTitle,
        mainTitle,
        img, btn: btns } = content

    return <div className="bg-white dark:bg-base-100 min-h-[90vh] grid gird-cols-1 md:grid-cols-2 gap-2 container ">
        {/* === Right section */}
        <div className="flex flex-col justify-center gap-7 text-gray-700 dark:text-slate-200 order-2 md:order-1">
            <h4 className="font-extralight text-2xl md:text-5xl mb-3">{title}</h4>
            <h3 className="font-semibold text-3xl md:text-6xl mb-3">{subTitle}</h3>
            <h4 className="font-bold text-4xl md:text-7xl mb-3">{mainTitle}</h4>
            {/* === btn === */}
            <div className="flex items-center gap-3 mt-3">
                {(btns || []).map((btn) => {
                    const { Icon, variant, label, id } = btn
                    return <Button
                        key={id}
                        size="base"
                        variant={variant}
                    >
                        {label}
                        {Icon && <Icon className="w-6 h-6" />}
                    </Button>
                })}
            </div>
        </div>
        {/* === left section => image === */}
        <div className="relative order-1 md:order-2">
            {/* === Image product === */}
            <Image src={img} className="w-[89%] h-full relative z-[2] object-contain m-auto" alt={mainTitle} />
            {/* === Cover background === */}
            <Image src={shape} className="w-full h-full absolute inset-0 z-[1]" alt="shape" />
        </div>
    </div>

}
export default BannerMain