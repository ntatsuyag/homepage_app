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
                    <h2>インターン</h2>
                    <p>2020/9 : 株式会社 AI Shift</p>
                    <p>音声自動応答についての改善に取り組みました。インターン体験記を<a href="https://www.ai-shift.co.jp/techblog/1293">TechBlog</a>に書きました。対話システムシンポジウムでの発表については<a href="https://www.ai-shift.co.jp/techblog/1416">こちら</a>。</p>
                    <h2>このサイトについて</h2>
                    <p>React + TailwindCSS で作成。TailwindCSSの便利さに感動しました。</p>
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