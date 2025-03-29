import Link from 'next/link'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'

const items = []

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading="用語説明" />
      <p>準備中</p>
    </div>
  )
}
