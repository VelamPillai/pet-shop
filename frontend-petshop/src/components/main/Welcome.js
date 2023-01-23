import { HiArrowRight } from 'react-icons/hi'
import welcomeImage from '../../image/welcome-2.png'

export default function Welcome() {
  return (
    <div className='grid md:grid-cols-2 mt-16 sm:grid-cols-1'>
        <div className='w-full'>
          <h2 className='text-[28px] font-bold leading-9 '>Welcome to our shop</h2>
          <p className='text-[16px] leading-24 my-4'>At Pet Store you will only find the highest quality products for your pet. We focus on products that enhance your pet's health and wellbeing like veterinary diet dog food, veterinary diet cat food and supplements.</p>
          <p className='text-[16px] leading-24 my-4'>We also offer an assortment of more traditional products like toys, care products and cat litter.</p>
          <button className='border-2  rounded-md bg-orange-400 px-6 py-2 my-4  flex items-center justify-center gap-4  text-white'  >Shop now <HiArrowRight /></button>
        </div>
        <img src={welcomeImage}  alt="welcomeImage"  className='w-full'/>
    </div>
  )
}
