// 内容がいじりにくいので使わない

import React from 'react'

const ContentDetails = (props) => {
  return (
    <div className='bg-gray-200'>
    <h2>詳細</h2>
    <p>{props.detail}</p>
    </div>
  )
}

export default ContentDetails