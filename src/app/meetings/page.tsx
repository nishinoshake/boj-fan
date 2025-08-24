import Link from 'next/link'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'
import { getAllMeetings } from '@/lib/meetings'
import Qa from '@/components/meetings/Qa'

export default function () {
  const meetings = getAllMeetings()

  return (
    <div className={styles.root}>
      <HeadingIndex heading="金融政策決定会合" />
      <div className={styles.table}>
        <ul className={styles.list}>
          {meetings.map((meeting) => (
            <li className={styles.item} key={meeting.slug}>
              <Link href={`/meetings/${meeting.slug}`} className={styles.row}>
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
