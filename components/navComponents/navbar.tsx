import { useRef, useState } from 'react'
import styles from '../../styles/navBar.module.scss'
import {HomeIconSvg} from '../../config/svg'
import NavOptions from './navOptions';

function NavBar() {
  const navLine1Ref = useRef<HTMLDivElement>(null);
  const navLine2Ref = useRef<HTMLDivElement>(null);
  const navLine3Ref = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [showData, setShowData] = useState(false);
  const naveLineToggle = () => {
    if(!navLine1Ref.current || !navLine3Ref.current || !navLine2Ref.current || !navContainerRef.current) return;
    // navLine1Ref.current.className = "navLine1 navLine1Turn"
    if(navLine1Ref.current.classList.length<=2){
      navLine2Ref.current.className = `${styles.navLine2} ${styles.navLine2Hide} ${styles.navLine2Animation}`
      navContainerRef.current.className = `${styles.navContainer} ${styles.navContainerWide} ${styles.navAnimation}`
      setTimeout(()=>{
        if(navLine1Ref.current && navLine3Ref.current){
          navLine1Ref.current.className = `${styles.navLine1} ${styles.navLine1Turn} ${styles.navLine1Animation}`
          navLine3Ref.current.className = `${styles.navLine3} ${styles.navLine3Turn} ${styles.navLine3Animation}`
        }
      },300)
      return;
    }
    setTimeout(()=>{
      if(navLine2Ref.current)
      navLine2Ref.current.className = `${styles.navLine2} ${styles.navLine2Animation}`
    },500)
    navLine1Ref.current.className = `${styles.navLine1} ${styles.navLine1Animation}`
    navLine3Ref.current.className = `${styles.navLine3} ${styles.navLine3Animation}`
    navContainerRef.current.className = `${styles.navContainer} ${styles.navAnimation}`
  }
  return (
      <div ref={navContainerRef} className={styles.navContainer}>
        <div className={styles.navToggle} onClick={()=>{
          naveLineToggle();
          setShowData(!showData);
        }}>
          <div ref={navLine1Ref} className={styles.navLine1}></div>
          <div ref={navLine2Ref} className={styles.navLine2}></div>
          <div ref={navLine3Ref} className={styles.navLine3}></div>
        </div>
          <NavOptions/>
        <div className={styles.navLogoSection}>
          <div className={styles.navLogo}>
            <img src="/logo.png" alt="logo" width="100%" height="100%"/>
          </div>
          {
            // showData && 
            <h3 className={styles.logoName}>Gokul Easwaran</h3>
          }
        </div>
      </div>
  )
}

export default NavBar
