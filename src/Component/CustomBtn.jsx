import React from 'react'

const CustomBtn = ({text , action }) => {
  return (
    <div>
        <button  onClick={action} className='bg-white w-[70px] h-[70px] rounded-lg font-semibold text-3xl focus:bg-orange-600 focus:text-white' >{text}</button>
    </div>
  )
}

export default CustomBtn