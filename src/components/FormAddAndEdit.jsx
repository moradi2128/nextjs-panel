"use client"
import Button from '@/common/Button'
import RadioInput from '@/common/RadioInput'
import TextField from '@/common/TextField'
import React from 'react'
import DatePicker from 'react-multi-date-picker'
import Select from 'react-select'
import { TagsInput } from 'react-tag-input-component'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import clsxm from '@/lib/clsxm'
const FormAddAndEdit = ({
    onSubmit,
    isLoading = false,
    textFieldArray,
    tagLabel = "تگ محصولات",
    tags,
    setTags,
    textFiledValue,
    textFieldChange,
    select,
    selectLabel = "دسته بندی",
    selectedValue = "",
    setSelectedValue,
    selectIsMulti = false,
    radioInputsLabel = "",
    radioInputArray,
    radioInputValue,
    setRadioInputValue,
    dateLabel = "",
    dateValue,
    setDateValue,
    containerStyle
}) => {
    function CustomMultipleInput({ onFocus, value }) {
        return (
            <TextField
                onFocus={onFocus}
                value={value}
                readOnly
            />
        )
    }
    return (
        <form className={clsxm("space-y-5", containerStyle)} onSubmit={onSubmit} >
            {textFieldArray.map((item) => {
                const { id, label, name } = item
                return <TextField
                    key={id}
                    label={label}
                    name={name}
                    value={textFiledValue[name] || ""}
                    onChange={textFieldChange}
                />
            })}
            {dateValue &&
                <div>
                    <label htmlFor="datePicker" className="label">{dateLabel}</label>
                    <DatePicker
                        id='datePicker'
                        value={dateValue}
                        render={<CustomMultipleInput />}
                        onChange={(v) => setDateValue(v)}
                        minDate={new Date()}
                        format="YYYY/MM/DD"
                        calendar={persian}
                        locale={persian_fa}
                    />
                </div>
            }
            {tags && <div>
                <label htmlFor="tags" className="label">{tagLabel}</label>
                <TagsInput
                    id="tags"
                    value={tags}
                    onChange={setTags}
                    name="tags"
                />
            </div>}
            {radioInputArray && <div>
                <span className='label'>{radioInputsLabel}</span>
                <div className='flex justify-between items-center'>
                    {radioInputArray.map((radioType) => {
                        const { id, value, name, label } = radioType
                        return <RadioInput
                            key={id}
                            label={label}
                            id={value}
                            name={name}
                            checked={value === radioInputValue}
                            value={value}
                            onChange={(e) => setRadioInputValue(e.target.value)}
                        />
                    })}
                </div>
            </div>}
            {select && <div>
                <label htmlFor="select-form" className='label'>{selectLabel}</label>
                <Select
                    name="select-form"
                    instanceId="select-form"
                    value={selectedValue}
                    isMulti={selectIsMulti}
                    onChange={(e) => setSelectedValue(e)}
                    options={select}
                    getOptionLabel={(o) => o.title || o?.label}
                    getOptionValue={(o) => o.englishTitle || o?.value || o?._id}
                // defaultValue={selectedValue}
                />
            </div>}
            <Button type="submit" isLoading={isLoading} >تایید</Button>
        </form>
    )
}

export default FormAddAndEdit