import styles from './QaBase.module.scss'
import Image from 'next/image'

type Props = {
  figureSrc?: string
  figureAlt: string
  figureName?: string
  displayName: string
  children: React.ReactNode
}

export default function QaBase({ figureSrc, figureAlt, figureName, displayName, children }: Props) {
  return (
    <li className={styles.qaItem}>
      <span className={`${styles.qaFigure} ${styles.qaFigureMember}`}>
        {figureSrc ? (
          <Image
            src={figureSrc}
            width={256}
            height={256}
            alt={figureAlt}
          />
        ) : (
          <span className={styles.qaFigureName}>{figureName}</span>
        )}
      </span>
      <span className={styles.qaBody}>
        <span className={styles.qaName}>{displayName}</span>
        <span className={styles.qaText}>
          {children}
        </span>
      </span>
    </li>
  )
}