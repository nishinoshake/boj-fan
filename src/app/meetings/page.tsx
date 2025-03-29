import Link from 'next/link'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'

const meetings = [
  {
    id: '202503',
    date: '2025/03/19',
    releaseTime: '11:25',
    summary: '現状維持'
  },
  {
    id: '202501',
    date: '2025/01/24',
    releaseTime: '12:23',
    summary: '0.25% → 0.5%'
  }
]

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading="金融政策決定会合" />
      <div className={styles.table}>
        <ul className={styles.list}>
          {meetings.map((meeting) => (
            <li className={styles.item} key={meeting.id}>
              <Link href={`/meetings/${meeting.id}`} className={styles.row}>
                <span className={styles.rowItem}>{meeting.date}</span>
                <span className={styles.rowItem}>{meeting.releaseTime}</span>
                <span className={styles.rowItem}>{meeting.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
