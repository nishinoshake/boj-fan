import { Meeting } from '@/types/meeting'
import styles from './MeetingQa.module.scss'
import Image from 'next/image'

type Props = {
  meeting: Meeting
}

export default function (props: Props) {
  return (
    <div className={styles.qa}>
      <h2 className={styles.heading}>主な質疑応答</h2>
      <p className={styles.disclaimer}>
        質疑応答のなかで為替に影響がありそうなものを抜粋しています。
        <br />
        そのまま載せると長くなるので、意味が変わらないギリギリまで省略しています。
      </p>
      <div className={styles.table}>
        <ul className={styles.qaList}>
          <li className={styles.qaItem}>
            <span className={`${styles.qaFigure} ${styles.qaFigureName}`}>
              幹
            </span>
            <span className={styles.qaBody}>
              <span className={styles.qaName}>
                <span>幹事社</span>
              </span>
              <span className={styles.qaText}>
                幹事社から二問お伺いします。まず追加利上げを決めた理由について伺います。総裁は
                12
                月の会見で、利上げの判断材料として、春闘でのモメンタム、米国のトランプ新政権の経済政策の不確実性、円安の物価への影響を挙げていました。それぞれの見方がこの
                1
                か月でどう変わったのか、変わっていないのか、それが政策の判断にどう影響したのか教えてください。
              </span>
            </span>
          </li>
          <li className={styles.qaItem}>
            <span className={`${styles.qaFigure} ${styles.qaFigureMember}`}>
              <Image
                src="/members/member_ueda_thumb.jpg"
                width={200}
                height={200}
                alt="植田総裁"
              />
            </span>
            <span className={styles.qaBody}>
              <span className={styles.qaName}>
                <span>植田総裁</span>
              </span>
              <span className={styles.qaText}>
                まず先ほど申し上げましたように、今日の会合では、展望レポートの見通しについて議論しまして、わが国の経済・物価が、これまで示してきた見通しに概ね沿って推移しており、先行き見通しが実現していく確度が高まってきていると判断しました。
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
