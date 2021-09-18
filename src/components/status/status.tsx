// Styles
import * as S from './status-styles'

// Types & Props
import { StatusProps } from 'resources/types'
type StatusIconProps = {
  status: StatusProps
  className?: string
}

const Status = ({ status = 'saved', className }: StatusIconProps) => {
  const Comp = {
    saving: S.LoadingIcon,
    saved: S.SavedIcon,
    editing: S.EditIcon,
  }[status]

  return (
    <S.StatusWrapper>
      <Comp className={className} />
    </S.StatusWrapper>
  )
}

export { Status }
