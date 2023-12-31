import {motion} from 'framer-motion'
import {faGhost} from '@fortawesome/free-solid-svg-icons'
import TopStory from '@/components/story/TopStory'

export default function Story() {
    return (
        <div className={'relative h-screen'}>
            <motion.div initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        className={'fixed bg-cover bg-center inset-0'}
                        style={{backgroundImage: `url('/horror-full-bg.png')`}}/>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 0.80}}
                        className={'fixed inset-0 bg-black opacity-70'}/>
            <div className={'z-20 relative'}>
                <TopStory icon={faGhost} backgroundIcon={'bg-1.svg'} title={'Create a horror story'}/>
            </div>
        </div>
    )
}
