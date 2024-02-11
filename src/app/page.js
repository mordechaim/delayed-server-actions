'use client'

import Link from 'next/link'
import { action } from './action'

export default function Home() {
    const handleClick = async () => {
        console.log('doing client-side prepocessing, prior server action')
        await new Promise(res => setTimeout(res, 5000))

        console.log('Client-side work done, executing server action')
        await action()
        console.log('action complete')
    }

    return <div className='flex flex-col p-10 items-start gap-5'>
        <Link href='/page' className='text-blue-500 underline'>Navigate to <span className='font-mono'>/page</span></Link>
        <button onClick={handleClick} className='border rounded-md px-4 py-2'>Process</button>
    </div>
}
