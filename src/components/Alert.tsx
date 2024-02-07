import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";

interface AlertProps {
    type: string | null,
    message: string | null,
}

export const Alert: React.FC<AlertProps> = ({
    type,
    message
}) => {

    if (!type || !message)
    {
        return null;
    }

    if (type === 'failed')
    {
        return(
            <div className="w-full bg-red-500 p-4 mb-3 rounded-md shadow-sm flex justify-start items-center gap-2" >
                <div>
                    <MdOutlineErrorOutline color="#fee2e2" size={22}/>
                </div>
                <div>
                    <p className="text-white"> {message} </p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full bg-emerald-500 p-4 mb-3 rounded-md shadow-sm flex justify-start items-center gap-2">
            <div>
                <LuCheckCircle color="#d1fae5" size={22} />
            </div>
            <div>
                <p className="text-white"> {message} </p>
            </div>
        </div>
    )
}

