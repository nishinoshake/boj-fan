import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import HomeAbout from '@/components/home/HomeAbout'

export default function Home() {
  return (
    <div className={styles.page}>
      <p>私、日銀を追いかけます</p>
      <HomeAbout />
    </div>
  )
}
