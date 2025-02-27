import React from 'react'
import styles from '../style'
import { business, finance, health, tick, world } from '../assets'

const Bulletpoints = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
        {/* head section */}
        <div className={`${styles.heading2}`}>
           More Benefits
        </div>
        {/* head section */}
        {/* card 1 */}
          <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] h-[160px] text-center bg-white rounded-[24px]'>
                <img src={finance} alt="" className='w-32 mt-5 mx-auto ' /> 
              
            </div>
            <div className='mt-2'>
              <p className={`${styles.paragraph}`}>Financial Freedom your way</p>
            </div>        
          </div>
          {/* card 1 */}   
        {/* card 1 */}
          <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] h-[160px] text-center bg-white rounded-[24px] '>
                <img src={health} alt="" className='w-36 mx-auto  mt-2 ' /> 
              
            </div>
            <div className='mt-2'>
              <p className={`${styles.paragraph}`}>Health & wellness products that improve your life.</p>
            </div>        
          </div>
          {/* card 1 */}   
        {/* card 1 */}
          <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] h-[160px] text-center bg-white rounded-[24px]'>
                <img src={world} alt="" className='w-28 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2'>
              <p className={`${styles.paragraph}`}>Work from anywhere, including your dream destinations.</p>
            </div>        
          </div>
          {/* card 1 */}   
        {/* card 1 */}
          <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] h-[160px] text-center bg-white rounded-[24px]'>
                <img src={business} alt="" className='w-28 mx-auto mt-5 ' /> 
              
            </div>
            <div className='mt-2'>
              <p className={`${styles.paragraph}`}>Build a business that can generate income for generations.</p>
            </div>        
          </div>
          {/* card 1 */}   
    </section>
  )
}

export default Bulletpoints
