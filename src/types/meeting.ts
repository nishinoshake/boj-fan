export type MeetingDoc = {
  name: string
  link: string
}

export type Meeting = {
  id: string
  title: string
  dateRange: string
  releaseTime: string
  youtube: string
  summary: string
  changeDetails: string[]
  docs: MeetingDoc[]
}
