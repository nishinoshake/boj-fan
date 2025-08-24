import QaItem from './Qa'
import styles from './MeetingQa.module.scss'
import { type Qa } from '@/types/qa'

type Props = {
  meetingId: string
}

async function getQaData(meetingId: string): Promise<Qa[]> {
  try {
    const module = await import(`@/data/meetings/meeting-qa-${meetingId}`)

    return module[`meetingQa${meetingId}`] || []
  } catch (error) {
    console.error(`Failed to load QA data for meeting ${meetingId}:`, error)
    return []
  }
}

export default async function QaList({ meetingId }: Props) {
  const qa = await getQaData(meetingId)

  if (qa.length === 0) {
    return null
  }

  return (
    <ul className={styles.qaList}>
      {qa.map((item, index) => (
        <QaItem
          key={index}
          type={item.type}
          id={item.id}
          name={item.name}
        >
          {item.content}
        </QaItem>
      ))}
    </ul>
  )
}