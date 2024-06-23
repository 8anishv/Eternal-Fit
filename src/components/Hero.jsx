import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-10 text-center max-w-[900px] w-full mx-auto'>
            <div className='flex flex-col gap-4'>

                <p className='text-xl sm:text-2xl'>IT'S TIME TO GET </p>
                <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-4'>ETERNALLY <span className='text-blue-400'>FIT</span></h1>
            </div>
            <p className='font-medium text-sm md:text-base'>I pledge to take control of my fitness journey with <span className='text-blue-400 font-medium text-lg'>Eternal Fit</span>. I will embrace personalized workouts, rely on expert guidance, and stay motivated. I commit to tracking my progress, pushing my limits, and becoming a healthier, stronger version of myself. My dedication is unending—because my <span className='text-blue-400 font-medium text-lg'>health is eternal</span>.</p>
             <Button func={()=>{
                window.location.href = "#generate"
             }} text={"Accept & Begin"}></Button>
        </div>
    )
}
