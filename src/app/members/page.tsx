import Link from 'next/link'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'
import Image from 'next/image'

const members = [
  {
    id: 'ueda',
    shortName: '植田総裁',
    stance: '鳥',
    job: '元共立大学教授',
    thumb: '/members/member_ueda_thumb.jpg'
  },
  {
    id: 'uchida',
    shortName: '内田副総裁',
    stance: '中立',
    job: '元日銀理事',
    thumb: '/members/member_uchida_thumb.jpg'
  },
  {
    id: 'himino',
    shortName: '氷見野副総裁',
    stance: '中立',
    job: '元金融庁長官',
    thumb: '/members/member_himino_thumb.jpg'
  },
  {
    id: 'nakamura',
    shortName: '中村審議委員',
    stance: 'ハト',
    job: '元日立製作所取締役',
    thumb: '/members/member_nakamura_thumb.jpg'
  },
  {
    id: 'noguchi',
    shortName: '野口審議委員',
    stance: 'ハト',
    job: '元専修大学教授',
    thumb: '/members/member_noguchi_thumb.jpg'
  },
  {
    id: 'nakagawa',
    shortName: '中川審議委員',
    stance: '中立',
    job: '元野村アセットマネジメント会長',
    thumb: '/members/member_nakagawa_thumb.jpg'
  },
  {
    id: 'takata',
    shortName: '高田審議委員',
    stance: 'タカ',
    job: '元みずほ総合研究所副理事長',
    thumb: '/members/member_takata_thumb.jpg'
  },
  {
    id: 'tamura',
    shortName: '田村審議委員',
    stance: 'タカ',
    job: '元三井住友銀行上席顧問',
    thumb: '/members/member_tamura_thumb.jpg'
  },
  {
    id: 'koeda',
    shortName: '小枝審議委員',
    stance: '中立',
    job: '元早稲田大学教授',
    thumb: '/members/member_koeda_thumb.jpg'
  }
]

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading="委員紹介" />
      <div className={styles.table}>
        <ul className={styles.list}>
          {members.map((member) => (
            <li className={styles.item} key={member.id}>
              <Link href={`/members/${member.id}`} className={styles.row}>
                <span className={styles.rowItem}>
                  <Image
                    src={member.thumb}
                    width={200}
                    height={200}
                    alt={member.shortName}
                  />
                </span>
                <span className={styles.rowItem}>
                  {member.shortName} / {member.stance} / {member.job}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
