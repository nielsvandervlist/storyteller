import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGhost, faRobot, faPaw, faSkullCrossbones, faDungeon, faHatWizard} from '@fortawesome/free-solid-svg-icons'

export default function HomeLayout({}) {

    const [animate, setAnimate] = useState([
        {
            name: 'Horror',
            label: 'horror',
            active: {opacity: 0},
            icon: faGhost,
            animation: {opacity: 1, y: -120},
            type: 'pink',
        },
        {
            name: 'Future',
            label: 'future',
            active: {opacity: 0},
            icon: faRobot,
            animation: {opacity: 1, x: -310, y: -120},
        },
        {
            name: 'Animals',
            label: 'animals',
            active: {opacity: 0},
            icon: faPaw,
            animation: {opacity: 1, x: -610, y: -120},
        },
        {
            name: 'Adventure',
            label: 'adventure',
            active: {opacity: 0},
            icon: faSkullCrossbones,
            animation: {opacity: 1, y: -420},
        },
        {
            name: 'History',
            label: 'history',
            active: {opacity: 0},
            icon: faDungeon,
            animation: {opacity: 1, x: -310, y: -420},
        },
        {
            name: 'Magic',
            label: 'magic',
            active: {opacity: 0},
            icon: faHatWizard,
            animation: {opacity: 1, x: -610, y: -420},
        },
    ])

    function setActiveLink(index, item) {
        const newAnimate = [...animate]
        newAnimate[index].active = item.animation
        setAnimate(newAnimate)
    }

    return (
        <div className={'relative'}>
            <motion.div exit={{opacity: 0}} className={'w-full text-center mb-10 text-white'}>
                <h1 className={'text-white'}>Welcome to Storymaker</h1>
                <p>Create stories for bedtime.</p>

            </motion.div>
            <div className="grid grid-cols-3 md:grid-rows-2 gap-10 w-full home-cards">
                {
                    animate.map((item, index) => {
                        return <Link href={`/prompt/${item.label}`} onClick={() => setActiveLink(index, item)}>
                            <motion.div exit={item.active}
                                        className={`home-cards__block home-cards__block--${item.type} overflow-hidden`}>
                                <div
                                    className={'w-full h-full relative flex items-center justify-center'}
                                >
                                    <FontAwesomeIcon className={'absolute z-20 text-[100px] text-white'}
                                                     icon={item.icon}/>
                                    <Image
                                        src={`/bg-${index + 1}.svg`}
                                        alt="Next.js Logo"
                                        fill
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
