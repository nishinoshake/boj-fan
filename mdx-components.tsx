import type { MDXComponents } from 'mdx/types'
import MeetingQa from '@/components/meetings/MeetingQa'
import Qa from '@/components/meetings/Qa'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    MeetingQa,
    Qa,
  }
}