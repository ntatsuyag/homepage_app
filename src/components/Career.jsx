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
                <div className='bg-gray-200'>
                    <p>キャリアについて</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi quis ducimus odit saepe sint, officiis quidem maxime ad inventore fugiat? Corrupti officia similique ad ducimus sapiente, itaque illum necessitatibus.</p>
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