import React from 'react'

export const FlexWithIcon = ({ icon, title, count }) => {
    return (
        <>
            <div className="flex gap-2">
                <div className="size-10  text-3xl text-blue-700  flex justify-center items-center ">
                    {icon}
                </div>
                <div className="w-[calc(100%-1rem)]">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-md text-gray-900">{count}</p>
                </div>
            </div>
        </>
    )
}
