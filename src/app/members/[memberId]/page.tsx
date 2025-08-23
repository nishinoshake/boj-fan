import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

type Props = {
  params: Promise<{ memberId: string }>
}

export default async function MemberPage({ params }: Props) {
  const { memberId } = await params
  
  try {
    const filePath = path.join(process.cwd(), 'src/content/members', `${memberId}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return <div>メンバーが見つかりません</div>
    }

    const source = fs.readFileSync(filePath, 'utf8')
    
    const { content, frontmatter } = await compileMDX<{
      name: string
      position?: string
      description?: string
    }>({
      source,
      options: {
        parseFrontmatter: true,
      },
    })

    return (
      <div>
        <h1>{frontmatter.name}</h1>
        {frontmatter.position && <p>役職: {frontmatter.position}</p>}
        {frontmatter.description && <p>説明: {frontmatter.description}</p>}
        <div>{content}</div>
      </div>
    )
  } catch (error) {
    console.error('MDXファイルの読み込みでエラーが発生しました:', error)
    return <div>エラーが発生しました</div>
  }
}
