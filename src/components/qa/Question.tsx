import QaBase from './QaBase'
import { pressData, type PressId } from '@/data/press'

type Props = {
  id: PressId
  name?: string
  children: React.ReactNode
}

export default function Question({ id, name, children }: Props) {
  const press = pressData.press.find(p => p.id === id)
  const displayName = press ? `${press.name} ${name || ''}`.trim() : name || id
  
  return (
    <QaBase
      figureSrc={press?.thumbnail || undefined}
      figureAlt={press?.name || id}
      figureName=""
      displayName={displayName}
    >
      {children}
    </QaBase>
  )
}