export type QaType = 'question' | 'member'

export type QaItem = {
  type: QaType
  name: string
  body: string
}
