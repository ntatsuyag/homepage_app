import React from 'react'

const ContentTitle = (props) => {
  const viewIcon = <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
  const hideIcon = <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>

  return (
    <div id={props.title} className='flex bg-gray-800 rounded-t-md mt-2'>
    {props.Icon}
    <h1 className='text-2xl text-slate-200 font-bold ml-2'>{props.title}</h1>
    <button onClick={props.handledvisibleFlag} className='w-10 rounded-tr-md bg-gray-600 text-slate-200 ml-auto'>
        {props.visibleFlag ? viewIcon : hideIcon}
    </button>
    </div>
  )
}

export default ContentTitle