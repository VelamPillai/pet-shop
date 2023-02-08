import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

export default function Slider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
  return (
    <div className='h-full relative w-[100%] '>
        <div className='absolute top-[50%] translate-y-[-50%] left-[32px] text-3xl text-white z-10 cursor-pointer' onClick={goToPrevious}><HiArrowLeft /></div>
        <div className='absolute top-[50%] translate-y-[-50%] right-[32px] text-3xl text-white z-10 cursor-pointer' onClick={goToNext}><HiArrowRight /></div>
        <div className="w-full h-full rounded-xl bg-center bg-cover " style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        <div className='flex justify-center relative'>{slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="my-0 mx-[3px] cursor-pointer text-[20px] text-orange-400 " onClick={() => goToSlide(slideIndex)}>●</div>
        ))}</div>
    </div>
  )
}
