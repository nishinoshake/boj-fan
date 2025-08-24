import { type PressId } from '@/data/press'
import { type MemberId } from '@/data/members'

export type QaItem<T extends 'q' | 'a'> = {
  type: T
  id: T extends 'q' ? PressId : MemberId
  name?: string
  content: string
}

export type QaQuestion = QaItem<'q'>
export type QaAnswer = QaItem<'a'>
export type Qa = QaQuestion | QaAnswer
