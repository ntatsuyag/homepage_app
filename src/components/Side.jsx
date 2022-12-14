import React from 'react'
import Profile from '../images/tatsuya.JPG'

const Side = () => {
    return (
        <>
        <h1 className='text-3xl font-semibold text-center'>Tatsuya Nishiyama</h1>
        <figure className='my-2'>
            <img src={Profile} alt="プロフィール" className='rounded-lg mx-auto'/>
        </figure>
        <div className='flex'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h2 className='text-xl text-gray-200 font-semibold ml-2'>自己紹介</h2>
        </div>
        <p>社会人1年目<br />幅広い知識を身につけられるようがんばります。</p>
        <div className='flex'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z" fill="currentColor" /><path d="M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z" fill="currentColor" /><path d="M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z" fill="currentColor" /></svg>
        <h2 className='text-xl font-semibold ml-2'>趣味</h2>
        </div>
        <p>コーヒー、サウナ、筋トレ、ブレイクダンス、ゲーム、スニーカー</p>
        <p className=' text-gray-400'>ロードバイク(しばらく乗っていません)</p>
        <h2 className='text-xl font-semibold ml-2'>資格</h2>
        <p>基本情報技術者</p>
        </>
    )
}

export default Side