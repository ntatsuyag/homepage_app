import {React,useState} from 'react'
import ContentTitle from './ContentTitle'


const Other = () => {
    const title = 'Other'
    const [visibleFlag, setVisible] = useState(true)
    const handledvisibleFlag = () => {
        setVisible(prevState => !prevState)
    }

    if (visibleFlag){
        return (
            <div className='text-gray-800'>
                <ContentTitle title={title} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
                {/* <ContentDetails detail={props.detail}/> */}
                <div className='bg-gray-200'>
                    <p>その他もろもろについて</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore cum. Aliquam, saepe. Commodi et accusantium inventore veniam earum voluptate ad facere molestiae quaerat. Nam molestiae perspiciatis sequi id error.</p>
                </div>
            </div>
        );
    }
    return (
        <div className='text-gray-800'>
            <ContentTitle title={title} handledvisibleFlag={handledvisibleFlag} visibleFlag={visibleFlag}/>
        </div>
    );
}

export default Other