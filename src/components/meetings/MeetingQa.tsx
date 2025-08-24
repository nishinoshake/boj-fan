import styles from './MeetingQa.module.scss'

type Props = {
  children: React.ReactNode
}

export default function MeetingQa({ children }: Props) {
  return (
    <div className={styles.qa}>
      <h2 className={styles.heading}>主な質疑応答</h2>
      <p className={styles.disclaimer}>
        質疑応答のなかで為替に影響がありそうなものを抜粋し、
        <br />
        意味が変わらないギリギリまで省略しています。
      </p>
      <div className={styles.table}>
        <ul className={styles.qaList}>
          {children}
        </ul>
      </div>
    </div>
  )
}