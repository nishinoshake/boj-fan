import type { MDXComponents } from 'mdx/types'
import MeetingQa from '@/components/meetings/MeetingQa'
import Question from '@/components/qa/Question'
import Answer from '@/components/qa/Answer'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    MeetingQa,
    Question,
    Answer,
  }
}