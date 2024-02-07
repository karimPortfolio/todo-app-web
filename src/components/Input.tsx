import React from 'react'


interface InputProps {
    type: string,
    placeholder: string,
    value: string,
    name: string,
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    autocomplete?: string,
}

export const Input: React.FC<InputProps> = ({
    type,
    value,
    name,
    handleChange,
    placeholder,
    autocomplete
}) => {

  return (
    <div>
        <input 
        className='mt-1 block w-full px-3 py-2 h-[50px] bg-white border mt-3
        border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500'
        type={type} 
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autocomplete !== '' ? autocomplete : 'off'}
        />
    </div>
  )
}
