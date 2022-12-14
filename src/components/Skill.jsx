import {React,useState} from 'react'
import ContentTitle from './ContentTitle'

const Skill = () => {
    const title = 'Skill'
    const Icon = <svg className="w-6 h-auto text-slate-200 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>


    const [visibleFlag, setVisible] = useState(true)
    const handledvisibleFlag = () => {
        setVisible(prevState => !prevState)
    }

    if (visibleFlag){
        return (
            <div className='text-gray-800'>
                <ContentTitle title={title} Icon={Icon} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
                {/* <ContentDetails detail={props.detail}/> */}
                <div className='bg-gray-200'>
                    <p>スキルについて</p>
                    <h2>プログラム</h2>
                    <div className='flex flex-wrap'>
                        <div className='text-slate-50 bg-slate-500 text-center m-2 flex-auto'>
                            <h3 className=' bg-slate-800'>Python</h3>
                            <p>3年くらい研究で利用</p>
                            <h4 className=' bg-slate-700'>フレームワーク、ライブラリ</h4>
                            <p>PyTorch</p>
                            <p>TensorFlow</p>
                            <p>Django</p>
                            <p>Flask</p>
                        </div>

                        <div className='text-slate-50 bg-slate-500 text-center m-2 flex-auto'>
                            <h3 className=' bg-slate-800'>JavaScript</h3>
                            <p>個人開発で利用</p>
                            <h4 className=' bg-slate-700'>フレームワーク、ライブラリ</h4>
                            <p>React</p>
                            <p>Node.js</p>
                        </div>

                        <div className='text-slate-50 bg-slate-500 text-center m-2 flex-auto'>
                            <h3 className=' bg-slate-800'>Java</h3>
                            <p>大学の授業でやった程度</p>
                            <h4 className=' bg-slate-700'>フレームワーク、ライブラリ</h4>
                        </div>

                        <div className='text-slate-50 bg-slate-500 text-center m-2 flex-auto'>
                            <h3 className=' bg-slate-800'>C</h3>
                            <p>大学の授業でやった程度</p>
                            <h4 className=' bg-slate-700'>フレームワーク、ライブラリ</h4>
                        </div>

                        <div className='text-slate-50 bg-slate-500 text-center m-2 flex-auto'>
                            <h3 className=' bg-slate-800'>HTML, CSS</h3>
                            <p>個人開発で利用</p>
                            <h4 className=' bg-slate-700'>フレームワーク、ライブラリ</h4>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div>
                    <h2>デバイス</h2>
                    <p>Mac,Ubuntu,Raspberry Pi,Jetson</p>
                    </div>
                    <div>
                        <h2>その他</h2>
                        <p>Git、GitHub、Docker</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='text-gray-800'>
            <ContentTitle title={title} Icon={Icon} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
        </div>
    );
}

export default Skill