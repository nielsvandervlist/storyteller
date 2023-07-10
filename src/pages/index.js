import {useAuth} from '@/hooks/auth'
import React from 'react'
import HomeLayout from '@/components/layout/home-layout'
import Container from '@/components/layout/container'
import {motion} from 'framer-motion'

export default function Home() {
    const {user} = useAuth({middleware: 'guest'})
    return <>
        <Container small>
            <motion.div className={'absolute bg-cover bg-center inset-0'} style={{backgroundImage: `url('/bg-home.png')`}}/>
            <motion.div className={'absolute inset-0 bg-black opacity-70'}/>
            <HomeLayout/>
        </Container>
    </>
}
