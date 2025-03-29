import Link from 'next/link'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'

const events = [
  {
    id: 'event-2025032602',
    date: '2025/03/26',
    time: '17:00',
    members: ['小枝審議委員'],
    name: '就任記者会見'
  },
  {
    id: 'event-2025032601',
    date: '2025/03/26',
    time: '09:00',
    members: ['植田総裁'],
    name: '衆議院財務金融委員会'
  }
]

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading="出演情報" />
      <div className={styles.table}>
        <ul className={styles.list}>
          {events.map((event) => (
            <li className={styles.item} key={event.id}>
              <Link href={`/events/${event.id}`} className={styles.row}>
                <span className={styles.rowItem}>{event.date}</span>
                <span className={styles.rowItem}>{event.time}</span>
                <span className={styles.rowItem}>
                  {event.members.join(' / ')}
                </span>
                <span className={styles.rowItem}>{event.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
