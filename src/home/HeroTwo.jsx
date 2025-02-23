import React from 'react'
import styles from '../style'

const HeroTwo = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 flex flex-col`}>
  {/* main text */}
         
         <div className={`${styles.heading1} `} >
          
        <h1 className=''>
     <span className='gold'>Unlock </span>  the Path to Your Dream Life!
        </h1>
         </div>
         <div className={`${styles.subHeading}`}>
         Turn your aspirations into a reality. <br /> Earn from anywhere, anytime, while making an impact that <br />
         lasts forever.
         </div>
  {/* main text */}
    
 </section>
  )
}

export default HeroTwo