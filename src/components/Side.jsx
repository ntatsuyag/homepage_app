import React from 'react'
import Profile from '../images/tatsuya.JPG'

const Side = () => {
    return (
        <>
        <h1 className='text-3xl font-semibold text-center'>Tatsuya Nishiyama</h1>
        <figure className='my-2'>
            <img src={Profile} alt="プロフィール" className='rounded-lg mx-auto'/>
        </figure>
        <h2 className='text-xl text-gray-200 font-semibold'>自己紹介</h2>
        <p>社会人1年目です。<br />幅広い知識を身につけられるよう日々努力しています。</p>
        <h2 className='text-xl font-semibold'>趣味</h2>
        <p>コーヒーを淹れること、サウナ、ブレイクダンス、ゲーム</p>
        <p className=' text-gray-500'>ロードバイク</p>
        </>
    )
}

export default Side