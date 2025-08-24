import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading="イベント" />
      <p>準備中</p>
    </div>
  )
}
