import React from "react"
import { ClipLoader } from 'react-spinners';

interface ButttonProps{
    loading?: boolean,
    children: React.ReactNode,
    type: "submit" | "reset" | "button" | undefined,
    handleClick: () => void,
    className: string
}

export const Button: React.FC<ButttonProps> = ({
    loading,
    children,
    handleClick,
    className,
    type
}) => {

    return(
        <div>
            <button
            type={type}
            onClick={handleClick}
            className={className}
            >
                {
                    loading ? (
                        <ClipLoader
                        size={20}
                        color="#fff"
                        />
                    ) : (
                        <span>
                            {children}
                        </span>
                    )
                }
            </button>
        </div>
    )
}
