import Button from '@/common/Button'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import OTPInput from 'react-otp-input'

const CheckOTPForm = ({ onSubmit, otp, setOtp, isLoading, goBack, time, onResendOtp, otpResponse, errorMessage, onFocus }) => {
  console.log('otpResponse', otpResponse)
  return (
    <div className='w-full min-h-[300px]'>
      <Button onClick={goBack} className="mb-7">بازگشت</Button>
      {/* Todo === add edit phone Number button === */}
      {otpResponse && <p>{otpResponse?.message}</p>}
      <div className='mb-10'>
        {time > 0 ?
          <div>
            ثانیه تا ارسال مجدد کد {time}
          </div>
          : <Button onClick={onResendOtp}>ارسال مجدد کد</Button>
        }
      </div>
      <form className='space-y-10' onSubmit={onSubmit}>
        <div style={{ direction: "ltr" }}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            AllowedInputTypes="number"
            inputStyle={{
              width: "2.5rem",
              padding: ".5rem .2rem",
              border: "1px solid rgb(var(--color-primary-300))",
              borderRadius: "0.5rem"
            }}
            containerStyle="flex gap-x-2 justify-center"
            renderInput={(props) => <input
              type="number"
              {...props}
              onFocus={onFocus}
              className={`textField__input ${errorMessage && "border-red-500 bg-red-50"}`} />}
          />
          <div className='flex items-center gap-1 mt-2 min-h-[20px]' style={{ direction: "rtl" }}>
            {
              errorMessage &&
              <>
                <InformationCircleIcon className='w-5 h-5 text-red-500' />
                <span className='text-red-500 text-xs'>{errorMessage}</span>
              </>
            }
          </div>
        </div>
        <Button type="submit" className='w-full' isLoading={isLoading}>تایید</Button>
      </form>
    </div>
  )
}

export default CheckOTPForm