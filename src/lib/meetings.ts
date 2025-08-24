import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface MeetingMetadata {
  id: string
  title: string
  dateRange: string
  date: string
  releaseTime: string
  youtube?: string
  summary: string
  changeDetails: string[]
  docs: Array<{
    name: string
    link: string
  }>
  slug: string
}

export function getAllMeetings(): MeetingMetadata[] {
  const meetingsDirectory = path.join(process.cwd(), 'src/content/meetings')
  
  if (!fs.existsSync(meetingsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(meetingsDirectory)
  const meetings = filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const fullPath = path.join(meetingsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        ...data,
        slug: name.replace(/\.mdx$/, '')
      } as MeetingMetadata
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return meetings
}