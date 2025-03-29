import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'
import YouTubeThumb from '@/components/ui/YouTubeThumb'
import MeetingInfo from '@/components/meetings/MeetingInfo'
import MeetingQa from '@/components/meetings/MeetingQa'

const meeting = {
  id: '20250319',
  title: '金融政策決定会合 2025年3月',
  dateRange: '2025年3月18日～19日',
  releaseTime: '11:25',
  youtube: 'j13bqpek4_Y',
  summary: '現状維持',
  changeDetails: ['現状維持（賛成8/反対1）'],
  docs: [
    {
      name: '金融市場調節方針の変更について',
      link: 'https://www.boj.or.jp/mopo/mpmdeci/mpr_2025/k250124a.pdf'
    },
    {
      name: '総裁定例記者会見',
      link: 'https://www.boj.or.jp/about/press/kaiken_2025/kk250127a.pdf'
    },
    {
      name: '経済・物価情勢の展望',
      link: 'https://www.boj.or.jp/mopo/outlook/gor2501b.pdf'
    },
    {
      name: '主な意見',
      link: 'https://www.boj.or.jp/mopo/mpmsche_minu/opinion_2025/opi250124.pdf'
    },
    {
      name: '議事要旨',
      link: 'https://www.boj.or.jp/mopo/mpmsche_minu/minu_2025/g250124.pdf'
    }
  ],
  qa: [
    {
      type: 'question',
      name: '幹事社',
      body: '幹事社から二問お伺いします。まず追加利上げを決めた理由について伺います。総裁は 12 月の会見で、利上げの判断材料として、春闘でのモメンタム、米国のトランプ新政権の経済政策の不確実性、円安の物価への影響を挙げていました。それぞれの見方がこの 1 か月でどう変わったのか、変わっていないのか、それが政策の判断にどう影響したのか教えてください。'
    },
    {
      type: 'member',
      name: 'ueda',
      body: 'まず先ほど申し上げましたように、今日の会合では、展望レポートの見通しについて議論しまして、わが国の経済・物価が、これまで示してきた見通しに概ね沿って推移しており、先行き見通しが実現していく確度が高まってきていると判断しました。'
    }
  ]
}

export default function () {
  return (
    <div className={styles.root}>
      <HeadingIndex heading={meeting.title} />
      <div className={styles.movie}>
        <YouTubeThumb slug={meeting.youtube} />
      </div>
      <MeetingInfo meeting={meeting} />
      <MeetingQa />
    </div>
  )
}
