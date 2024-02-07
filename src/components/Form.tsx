import React from 'react'
import { Input } from './Input'
import { Label } from './Label'
import { Button } from './Button'
import { Alert } from './Alert'


interface FormProps {
    inputs:{
        type: string,
        placeholder: string,
        value: string,
        name: string,
        handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
        autocomplete?: 'string',
        text: string,
        id: string
    }[],
    handleClick: () => void,
    loading?: boolean,
    result: {
        type: string | null,
        message: string | null
    }
}

export const Form = ({
    inputs,
    handleClick,
    loading,
    result,
}: FormProps) => {


  return (
    <div className='w-[95%] sm:w-[500px] h-fit px-3 py-4 sm:p-5 bg-fuchsia-50 rounded-md shadow-md'>

        <Alert 
        type={result.type}
        message={result.message}
        />

        <form>
        {
            inputs.map( (item) => (
                <div key={item.id} className='py-4' > 
                    <Label 
                    text={item.text}
                    id={item.id}
                    />
                    <Input 
                    type={item.type}
                    value={item.value}
                    name={item.name}
                    placeholder={item.placeholder}
                    handleChange={item.handleChange || undefined}
                    autocomplete={item.autocomplete ? item.autocomplete : ''}
                    />
                </div>
            ))
        }

        <Button
        type='button'
        handleClick={handleClick}
        className='group w-[170px] h-[50px] bg-fuchsia-600 text-white rounded-md hover:border-fuchsia-600
        hover:bg-transparent hover:text-fuchsia-600 border transition-all duration-700'
        loading={loading}
        >
            Reset password
        </Button>

        </form>
    </div>
  )
}



