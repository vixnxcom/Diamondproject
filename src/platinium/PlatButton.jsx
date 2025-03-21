import React from 'react'


import styles from '../style'
import { HashLink } from 'react-router-hash-link'

const PlatButton = () => {
    
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10 mb-10`}>
    <div className=''>
    <button className='mx-auto bg-blue md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <HashLink to ='/platinum#plat'
     className='aeon-bold text-white text-[20px]'>Choose Platinum</HashLink>
    </button>
    </div>
</div>
  )
}

export default PlatButton
