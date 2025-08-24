import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import styles from './page.module.scss'
import HeadingIndex from '@/components/ui/HeadingIndex'
import YouTubeThumb from '@/components/ui/YouTubeThumb'
import MeetingInfo from '@/components/meetings/MeetingInfo'
import MeetingQa from '@/components/meetings/MeetingQa'
import Question from '@/components/qa/Question'
import Answer from '@/components/qa/Answer'


type Props = {
  params: Promise<{ meetingId: string }>
}

type MeetingFrontmatter = {
  id: string
  title: string
  dateRange: string
  releaseTime: string
  youtube: string
  summary: string
  changeDetails: string[]
  docs: Array<{
    name: string
    link: string
  }>
}

export default async function MeetingPage({ params }: Props) {
  const { meetingId } = await params
  
  try {
    const filePath = path.join(process.cwd(), 'src/content/meetings', `${meetingId}.mdx`)
    
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf8')
      
      const { content, frontmatter } = await compileMDX<MeetingFrontmatter>({
        source,
        components: {
          MeetingQa,
          Question,
          Answer
        },
        options: {
          parseFrontmatter: true,
        },
      })

      return (
        <div className={styles.root}>
          <YouTubeThumb slug={frontmatter.youtube} />
          <div className={styles.heading}>
            <HeadingIndex heading={frontmatter.title} />
          </div>
          <MeetingInfo meeting={frontmatter} />
          <div>{content}</div>
        </div>
      )
    }
  } catch (error) {
    console.error('MDXファイルの読み込みでエラーが発生しました:', error)
  }

  return <div>会議が見つかりません</div>
}
