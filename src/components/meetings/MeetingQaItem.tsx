import { Meeting } from '@/types/meeting'
import styles from './MeetingQa.module.scss'

type Props = {
  meeting: Meeting
}

export default function (props: Props) {
  return (
    <div className={styles.qa}>
      <h2 className={styles.heading}>主な質疑応答</h2>
      <p className={styles.disclaimer}>
        質疑応答のなかで為替に影響のありそうなものを抜粋しています。
        <br />
        長くなるので意味が変わらないギリギリまで省略しています。
      </p>
      <div className={styles.table}></div>
    </div>
  )
}
