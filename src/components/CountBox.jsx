import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
// import React from 'react'


const CountBox = ({onIncrement, onDecrement, count, digitshow = false}) => {
    return (
        <>
            <div className="w-1/2 flex justify-end">
                <div className="inline-flex border border-blue-gray-200">
                   <button
                        className="size-8 text-xs leading-8 outline-none bg-white"
                        onClick={onDecrement}
                    >
                         <MinusOutlined />
                       
                    </button>
                    {
                        digitshow && (
                            <>
                             <input
                        type="text"

                        value={count}
                        readOnly
                        className="size-8 text-center outline-none text-xs leading-8"
                    />
                            </>
                        )
                    }
                   
                    

                     <button
                        className="size-8 text-xs leading-8 outline-none bg-white"
                        onClick={onIncrement}
                    >
                        <PlusOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CountBox

CountBox.propTypes = {
    onIncrement  :PropTypes.func,
    onDecrement : PropTypes.func,
    count :  PropTypes.number,
    digitshow : PropTypes.bool
}