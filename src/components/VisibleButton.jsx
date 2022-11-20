import React from 'react'

const VisibleButton = (props) => {
    return (
    <button onClick={props.handledvisibleFlag} className='w-20 rounded-tr-md bg-gray-600 text-slate-200 ml-auto'>
        {props.visibleFlag ? '非表示': '表示'}
    </button>
    )
}

export default VisibleButton