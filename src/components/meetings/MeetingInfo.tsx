import { Meeting } from '@/types/meeting'
import styles from './MeetingInfo.module.scss'

type Props = {
  meeting: Meeting
}

export default function (props: Props) {
  return (
    <div className={styles.info}>
      <dl className={styles.infoTable}>
        <dt>日程</dt>
        <dd>{props.meeting.dateRange}</dd>
        <dt>発表時間</dt>
        <dd>{props.meeting.releaseTime}</dd>
        <dt>変更内容</dt>
        <dd>
          <ul className={styles.changeList}>
            {props.meeting.changeDetails.map((changeDetail) => (
              <li key={changeDetail}>{changeDetail}</li>
            ))}
          </ul>
        </dd>
        <dt>文書</dt>
        <dd>
          <ul className={styles.docList}>
            {props.meeting.docs.map((doc) => (
              <li key={doc.name}>
                <a href={doc.link} target="_blank">
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  )
}
