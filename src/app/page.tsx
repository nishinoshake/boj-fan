import styles from './page.module.scss'
import HomeAbout from '@/components/home/HomeAbout'

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeAbout />
    </div>
  )
}
