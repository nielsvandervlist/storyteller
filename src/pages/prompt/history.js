import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/container'
import PromptInput from '@/components/detail/PromptInput'
import {faDungeon} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Story() {

    const [completion, setCompletion] = useState(true)

    return (
        <div className={'relative h-screen'}>
            <motion.div initial={{opacity: 1}}
                        animate={{opacity: 1}}
                        className={'absolute bg-cover bg-center inset-0'}
                        style={{backgroundImage: `url('/history-bg-full.png')`}}/>
            <motion.div initial={{opacity: 0.50}}
                        animate={{opacity: 0.70}}
                        className={'absolute inset-0 bg-black opacity-70'}/>
            <div className={'z-20 relative'}>
                <Container small>
                    <div className="grid grid-cols-3 gap-10 w-full home-cards">
                        <div className="home-cards__block home-cards__block--pink overflow-hidden">
                            <motion.div
                                className={'w-full h-full relative flex items-center justify-center'}
                            >
                            <FontAwesomeIcon className={'absolute z-20 text-[100px] text-white'} icon={faDungeon} />
                                <Image
                                src={`/bg-5.svg`}
                                    alt="Next.js Logo"
                                    fill
                                    priority
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            className={'col-span-2 text-white'}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                        >
                            <h1 className={'mb-4 text-white'}>Create a history story</h1>
                            <p className={'intro mb-8'}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                Nulla
                                consequat massa quis enim.
                            </p>
                            <div>
                                <p className={'underline mb-8'}>For example:</p>

                                <i className={'mb-8 inline-block'}>I want to hear a story about a bear who lost his
                                    mother
                                    and tried to find her in a scary forest. He eventually succeeds!</i>

                                <PromptInput completion={completion} setCompletion={setCompletion}/>
                            </div>

                        </motion.div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
