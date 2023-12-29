import React, {useCallback, useState} from 'react'
import Loader from '@/components/loaders/Loader'
import Image from 'next/image'
import VoiceForm from '@/components/speech/VoiceForm'

export default function PromptInput({completion, setCompletion}) {

    const [value, setValue] = useState('')

    const handleInput = useCallback(
        (e) => {
            setValue(e.target.value)
        }, [])

    const sendPrompt = useCallback(
        async (e) => {

            if (!value) {
                return false
            }

            if (e.key === 'Enter' || e.type === 'click') {
                setCompletion(true)
                const response = await fetch('/api/prompt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: 'Write a story with max 5 sentences, subject:' + value}),
                })

                const data = await response.json()

                if (!data.result) {
                    return setCompletion({
                        data: 'Your request is not available right now',
                    })
                }

                setCompletion({
                    data: data.result.choices[0].text,
                    image: data.image,
                })
            }
        }, [value])

    return <div className={'prompt-input'}>
        {!completion.data &&
            <>
        <textarea
            value={value}
            placeholder={'Type your story here'}
            onChange={handleInput}
            onKeyDown={sendPrompt}
            className={'w-full mb-4 text-white'}
        />
                <button onClick={(e) => sendPrompt(e)} className={'btn btn--pink w-full md:w-auto'}>Create your story</button>
            </>
        }
        {
            completion && !completion.data &&
            <Loader/>
        }
        {
            completion.data && <>
                <div className={'my-8 italic overflow-y-scroll'}><span
                    className={'block bold mb-8'}>The story:</span> {completion.data.split('\n').map(item => <p className={'text-[24px]'}>{item}<br/></p>)}
                </div>
                <VoiceForm textValue={completion.data}/>
            </>
        }
    </div>
}
