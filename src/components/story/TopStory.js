import Container from '@/components/layout/container'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faPaw} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import PromptInput from '@/components/detail/PromptInput'
import {useState} from 'react'

export default function TopStory({icon, backgroundIcon, title}){

    const [completion, setCompletion] = useState(false)

    return <Container small>
        <div className="md:grid grid-cols-3 gap-10 w-full home-cards">
            <div>
                <div className="home-cards__block home-cards__block--pink overflow-hidden">
                    <motion.div
                        className={'w-full h-full relative flex items-center justify-center'}
                    >
                        <FontAwesomeIcon className={'absolute z-20 text-[100px] text-white'} icon={icon} />
                        <Image
                            src={`/${backgroundIcon}`}
                            alt="Next.js Logo"
                            fill
                            priority
                        />
                    </motion.div>
                </div>
                <div>
                    <Link className={'text-white flex gap-4 items-center mt-4'} href={'/'}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        Choose other category
                    </Link>
                </div>
            </div>

            <motion.div
                className={'col-span-2 text-white'}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.3}}
            >
                <h1 className={'mb-4 text-white'}>{title}</h1>
                <p className={'intro mb-8'}>
                    Say goodbye to ordinary bedtime tales – Storymaker, with the help of OpenAI, transforms the ordinary into the extraordinary, making bedtime a magical journey filled with warmth, comfort, and the sweetest dreams.
                </p>
                <div>
                    <p className={'underline mb-8 font-bold'}>For example:</p>

                    <i className={'mb-8 inline-block'}>I want to hear a story about a bear who lost his
                        mother
                        and tried to find her in a scary forest. He eventually succeeds!</i>

                    <PromptInput completion={completion} setCompletion={setCompletion}/>
                </div>

            </motion.div>
        </div>
    </Container>
}
