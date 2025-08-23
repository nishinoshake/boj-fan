import styles from './MeetingQa.module.scss'
import Image from 'next/image'
import pressData from '@/data/press.json'
import membersData from '@/data/members.json'

type Props = {
  type: 'q' | 'a'
  id: string
  name?: string
  children: React.ReactNode
}

export default function QaItem({ type, id, name, children }: Props) {
  const isQuestion = type === 'q'
  
  if (isQuestion) {
    const press = pressData.press.find(p => p.id === id)
    const displayName = press ? `${press.name} ${name || ''}`.trim() : name || id
    
    return (
      <li className={styles.qaItem}>
        <span className={`${styles.qaFigure} ${styles.qaFigureMember}`}>
          {press?.thumbnail ? (
            <Image
              src={press.thumbnail}
              width={256}
              height={256}
              alt={press.name}
            />
          ) : (
            <span className={styles.qaFigureName}>幹</span>
          )}
        </span>
        <span className={styles.qaBody}>
          <span className={styles.qaName}>
            <span>{displayName}</span>
          </span>
          <span className={styles.qaText}>
            {children}
          </span>
        </span>
      </li>
    )
  }
  
  const member = membersData.members.find(m => m.id === id)

  if (!member) {
    return
  }

  const displayName = member?.nickname || member?.name || id
  
  return (
    <li className={styles.qaItem}>
      <span className={`${styles.qaFigure} ${styles.qaFigureMember}`}>
        <Image
          src={member.thumbnail}
          width={200}
          height={200}
          alt={displayName}
        />
      </span>
      <span className={styles.qaBody}>
        <span className={styles.qaName}>
          <span>{displayName}</span>
        </span>
        <span className={styles.qaText}>
          {children}
        </span>
      </span>
    </li>
  )
}