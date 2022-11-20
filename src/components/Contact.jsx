import {React,useState} from 'react'
import ContentTitle from './ContentTitle'

const Contact = () => {
    const title = 'Contact'
    const Icon = <svg className="w-6 h-auto text-slate-200 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    
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
                    <a href="mailto:nityamanishi@gmail.com">連絡はこちらに → E-mail:nityamanishi@gmail.com</a>
                <div>
                {/* mail icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, iure magni sit fuga commodi explicabo enim ipsa voluptas impedit non velit modi harum autem debitis pariatur ut sint consectetur quibusdam.</p>
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

export default Contact