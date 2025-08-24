import QaBase from './QaBase'
import { membersData, type MemberId } from '@/data/members'

type Props = {
  id: MemberId
  children: React.ReactNode
}

export default function Answer({ id, children }: Props) {
  const member = membersData.members.find(m => m.id === id)

  if (!member) {
    return null
  }

  const displayName = member.nickname || ''
  
  return (
    <QaBase
      figureSrc={member.thumbnail}
      figureAlt={displayName}
      displayName={displayName}
    >
      {children}
    </QaBase>
  )
}