// Detailに詳細な内容を渡しにくい

import {React,useState} from 'react'
import ContentDetails from './ContentDetails';
import ContentTitle from './ContentTitle';

const Content = (props) => {
    const [visibleFlag, setVisible] = useState(true)
    const handledvisibleFlag = () => {
        setVisible(prevState => !prevState)
    }

    if (visibleFlag){
        return (
            <div className='text-gray-800'>
                <ContentTitle title={props.title} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
                <ContentDetails detail={props.detail}/>
            </div>
        );
    }
    return (
        <div className='text-gray-800'>
            <ContentTitle title={props.title} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
        </div>
    );
}

export default Content