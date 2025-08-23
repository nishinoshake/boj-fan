import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

type Props = {
  params: Promise<{ eventId: string }>
}

export default async function EventPage({ params }: Props) {
  const { eventId } = await params
  
  try {
    const filePath = path.join(process.cwd(), 'src/content/events', `${eventId}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return <div>イベントが見つかりません</div>
    }

    const source = fs.readFileSync(filePath, 'utf8')
    
    const { content, frontmatter } = await compileMDX<{
      title: string
      date: string
      description: string
    }>({
      source,
      options: {
        parseFrontmatter: true,
      },
    })

    return (
      <div>
        <h1>{frontmatter.title}</h1>
        <p>日付: {frontmatter.date}</p>
        <p>説明: {frontmatter.description}</p>
        <div>{content}</div>
      </div>
    )
  } catch (error) {
    console.error('MDXファイルの読み込みでエラーが発生しました:', error)
    return <div>エラーが発生しました</div>
  }
}
