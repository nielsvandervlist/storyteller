import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/container'
import PromptInput from '@/components/detail/PromptInput'
import {faPaw, faRobot} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import TopStory from '@/components/story/TopStory'

export default function Story() {

    const [completion, setCompletion] = useState(true)

    return (
        <div className={'relative h-screen'}>
            <motion.div initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        className={'fixed bg-cover bg-center inset-0'}
                        style={{backgroundImage: `url('/future-bg-full.jpeg')`}}/>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 0.75}}
                        className={'fixed inset-0 bg-black opacity-70'}/>
            <div className={'z-20 relative'}>
                <TopStory icon={faRobot} backgroundIcon={'bg-2.svg'} title={'Create a future story'}/>
            </div>
        </div>
    )
}
