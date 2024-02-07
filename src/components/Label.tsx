import React from 'react'


interface LabelProps {
    text: string,
    id: string,
}

export const Label: React.FC<LabelProps> = ({
    text,
    id
}) => {

  return (
    <div>
        <label 
        className='block text-sm font-medium text-slate-700'
        htmlFor={id}
        >
            {text}
        </label>
    </div>
  )
}
