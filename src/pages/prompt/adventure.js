import React from 'react'
import {motion} from 'framer-motion'
import {faPaw, faSkullCrossbones} from '@fortawesome/free-solid-svg-icons'
import TopStory from '@/components/story/TopStory'

export default function Story() {

    return (
        <div className={'relative h-screen'}>
            <motion.div initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        className={'fixed bg-cover bg-center inset-0'}
                        style={{backgroundImage: `url('/adventure-bg-full.jpeg')`}}/>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 0.75}}
                        className={'fixed inset-0 bg-black opacity-70'}/>
            <div className={'z-20 relative'}>
                <TopStory icon={faSkullCrossbones} backgroundIcon={'bg-4.svg'} title={'Create a adventure story'}/>
            </div>
        </div>
    )
}
