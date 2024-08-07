import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{labelName}</label>
        {isSupriseMe && (
            <button type='button' onClick={handleSupriseMe} className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'>
                Suprise Me
            </button>
        )}

      </div>
      <input value={value} type={type} id={name} name={name} placeholder={placeholder} onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField
