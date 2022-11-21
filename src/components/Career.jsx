import {React,useState} from 'react'
import ContentTitle from './ContentTitle'

const Career = () => {
    const title = 'Career'
    const Icon = <svg className="w-6 h-auto text-slate-200 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>

    const [visibleFlag, setVisible] = useState(true)
    const handledvisibleFlag = () => {
        setVisible(prevState => !prevState)
    }

    if (visibleFlag){
        return (
            <div className='text-gray-800'>
                <ContentTitle title={title} Icon={Icon} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
                {/* <ContentDetails detail={props.detail}/> */}
                <div className='bg-gray-200 pl-2'>
                    <div className='py-2'>
                        <div className='flex bg-slate-400 rounded-3xl'>
                            <svg className="text-white w-8 h-8 my-auto mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                            <p className='text-white font-semibold'>2016/4 ~ 2020/3</p>
                            <p className='text-white'>名古屋工業大学 創造工学教育課程 情報社会コース</p>
                            </div>
                        </div>
                        <div className='mt-1 flex bg-slate-400 rounded-3xl'>
                            <svg className="text-white w-8 h-8 my-auto mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                            <p className='text-white font-semibold'>2020/4 ~ 2022/3</p>
                            <p className='text-white'>名古屋工業大学大学院 創造工学プログラム</p>
                            </div>
                        </div>
                        <div className=' pl-10 pr-2'>                        
                        <h2 className='font-semibold'>学生時代の研究</h2>
                        <a href="https://www.slp.nitech.ac.jp/" className='underline'><div>李・酒向研究室</div></a>
                        <p>対話システム、自然言語処理、深層学習といったテーマについて研究。具体的には応答選択、対話状態追跡について研究していました。</p>
                        </div>
                        <div className='mt-1 flex bg-slate-400 rounded-3xl'>
                        <svg className='text-white w-8 h-8 my-auto mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.998 1.02014H8.99801V7.02014H10.9991L11.012 19.1652L9.16751 17.3309L7.75726 18.7491L12.0118 22.9799L16.2427 18.7253L14.8246 17.315L13.012 19.1378L12.9991 7.02014H14.998V1.02014ZM10.998 3.02014H12.998V5.02014H10.998V3.02014Z" fill="currentColor" /></svg>
                        <div>
                            <p className='text-white font-semibold'>〜 現在</p>
                            <p className='text-white'>愛知県のモビリティサービスの会社で社会人として働いています。
                            </p>
                        </div>
                        </div>
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

export default Career