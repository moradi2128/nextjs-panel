"use client"
import Logo from '@/components/Logo'
import { checkOtp, getOtp } from '@/services/authServices'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import CheckOTPForm from './CheckOTPForm'
import SendOTPForm from './SendOTPForm'
import bannerImg from "../../../../public/assets/images/loginBanner.png"
import Image from 'next/image'
import Button from '@/common/Button'
import { HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { toEnglishNumber } from '@/utils/toEnglishNumber'
import CompleteProfile from './CompleteProfile'
const FORM_MODE = {
  sendOtp: "sendOtp",
  checkOtp: "checkOtp",
  completeProfile: "completeProfile"
}
const RESEND_TIME = 90
const page = () => {
  const router = useRouter()
  const [step, setStep] = useState(FORM_MODE.sendOtp)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [time, setTime] = useState(0)
  const [error, setError] = useState("")

  const { data: otpResponse, isLoading, mutateAsync } = useMutation({ mutationFn: getOtp })
  const { dataCheckLoading, isLoading: isLoadingCheckOtp, mutateAsync: mutateAsyncCheckOtp } = useMutation({ mutationFn: checkOtp })

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value)
  }
  // === Validation ===
  const validationForm = () => {
    var isValid = true

    if (!phoneNumber) {
      setError("لطفا شماره موبایل خود را وارد کنید")
      isValid = false
    }
    if (phoneNumber.length < 10) {
      setError("لطفا شماره تماس معتبر وارد کنید")
      isValid = false
    }
    if (!otp && step === FORM_MODE.checkOtp) {
      setError("لطفا کد احراز هویت خود را وارد کنید")
      isValid = false
    }
    if (!otp.length !== 6 && step === FORM_MODE.checkOtp) {
      setError("لطفا کد احراز هویت معتبر وارد کنید")
      isValid = false
    }

    return isValid
  }
  // === fetch handlers ===
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (validationForm()) {
    try {
      const data = await mutateAsync({ phoneNumber })
      toast.success(data?.message);
      setStep(FORM_MODE.checkOtp)
      setTime(RESEND_TIME)
    } catch (error) {
      setStep(FORM_MODE.checkOtp)
      setTime(RESEND_TIME)
      if (error?.response?.data) {
        toast.error(error?.response?.data.message);
      }
    }
    // }

  }
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    // if (validationForm()) {
    try {
      const { message, user } = await mutateAsyncCheckOtp({ phoneNumber, otp })
      toast.success(message);
      if (user.isActive) {
        router.push("/")
      } else {
        setStep(FORM_MODE.completeProfile)
        // router.push("/complete-profile")
      }
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data.message);
      }
      // }
    }

  }
  // === Timer ===
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [time])
  // submit handler with press Enter
  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log('step', step)
  //       if (step === STEP_SEND_OTP) {
  //         onSubmitHandler(event)
  //       } else {
  //         checkOtpHandler(event)
  //       }
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  // === render Steps components ===
  const renderStep = () => {
    switch (step) {
      case FORM_MODE.sendOtp:
        return <SendOTPForm
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={onSubmitHandler}
          isLoading={isLoading}
          // errorMessage={error}
          onFocus={() => setError("")}
        />
      case FORM_MODE.checkOtp:
        return <CheckOTPForm
          onSubmit={checkOtpHandler}
          onResendOtp={onSubmitHandler}
          otp={otp}
          setOtp={setOtp}
          time={time}
          isLoading={isLoadingCheckOtp}
          otpResponse={otpResponse}
          // errorMessage={error}
          onFocus={() => setError("")}
          goBack={() => {
            setError("")
            setStep(FORM_MODE.sendOtp)
          }}
        />
      case FORM_MODE.completeProfile:
        return <CompleteProfile />
      default:
        return null;
    }
  }
  const renderNavigationButton = () => {
    return <div className='flex justify-around items-center gap-6 md:justify-center'>
      <Link href="/"
      >
        <HomeIcon className='w-5 h-5 inline mx-1' />
        صفحه نخست
      </Link>
      <Link href="/product"
      >
        <ShoppingBagIcon className='w-5 h-5 inline mx-1' />
        محصولات
      </Link>
    </div>
  }
  return (
    <div className='block w-full h-screen overflow-hidden'>
      <div className='h-full grid grid-rows-6 grid-cols-none md:grid-cols-3 md:grid-rows-none'>
        {/* ===left section === */}
        <div className='w-full mx-auto row-span-5 md:row-span-none sm:max-w-sm max-w-[25rem]  p-6 md:col-span-1 flex flex-col justify-center items-center'>
          <Logo />
          {renderStep()}
          <div className='md:hidden text-slate-600 w-full'>
            <div className='divider' />
            {renderNavigationButton()}
          </div>
        </div>
        <div className='relative overflow-hidden h-full flex justify-center items-center row-span-1 col-span-none row-start-1 md:row-start-auto md:row-span-5 md:col-span-2  w-full rounded-tr-[50px] rounded-br-[50px]'>
          <Image placeholder="blur" src={bannerImg} className="absolute inset-0 h-full w-ful -z-10" alt="banner" />
          <div className="hidden md:block text-white  backdrop-blur-md max-w-[65%] min-w-[60%] p-12 rounded-2xl shadow-light">
            <h4 className='text-2xl mb-8 '>خوش آمدید!</h4>
            <p className='mb-8 text-justify text-slate-400' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            {/* <div>
              <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  </span>
                </li>
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <span className="mr-2">2</span>
                    Account <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">3</span>
                  Confirmation
                </li>
              </ol>
            </div> */}
            <div className='hidden md:block'>
              {renderNavigationButton()}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page