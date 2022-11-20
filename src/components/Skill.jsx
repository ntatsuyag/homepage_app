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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, aliquam nobis est iusto qui iure ipsa, consequatur et in tenetur quae dolorum excepturi inventore eveniet nulla explicabo adipisci quam debitis.</p>
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