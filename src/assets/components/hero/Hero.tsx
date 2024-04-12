import { arrow, hand_icon, hero_image } from '@images/index'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero h-screen flex'>
      <div className='hero-left flex flex-1 flex-col justify-center gap-5 pl-44 leading-[1.1]'>
        <h2 className='text-[#090909] text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon flex items-center gap-5'>
            <p>new</p>
            <img src={hand_icon} alt='HAND-ICON' className='w-24' />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-lastes-btn flex justify-center items-center gap-4 w-80 h-16 rounded-full mt-7 bg-red-500 text-white text-xl'>
          <div>Latest Collection</div>
          <img src={arrow} alt='ARROW' />
        </div>
      </div>
      <div className='hero-right flex flex-1 justify-center'>
        <img src={hero_image} alt='HERO_IMAGE' />
      </div>
    </div>
  )
}
