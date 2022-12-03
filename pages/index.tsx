import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavSection1 from '../components/homeComponents/homeSection1'
import NavSection2 from '../components/homeComponents/homeSection2'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <section className={styles.section1}>
        <NavSection1/>
      </section>
      <section className={styles.section2}>
        <NavSection2/>
      </section>
    </div>
  )
}

export default Home
