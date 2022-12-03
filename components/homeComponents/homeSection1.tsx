import { useRef, useState } from 'react'
import styles from '../../styles/homeSection1.module.scss'

function HomeSection1() {
  
  return (
   <>
   <p className={styles.title1}>
            <span >Gokul <span>Easwaran</span></span>
          </p>
          <p className={styles.title2}>
            <span >Full Stack</span>
          </p>
          <p className={styles.title3}>
            <span >Developer</span>
          </p>
        <div className={styles.section1Image}>
          <img src="/gokul.jpeg" alt="" width="100%" />
        </div>
    </>
  )
}

export default HomeSection1
