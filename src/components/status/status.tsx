// Components
import { CircleIcon, LoadingIcon, UpdateIcon } from 'ui/icons'

// Styles
import * as S from './status-styles'

// Types & Props
type StatusProps = {
  status: 'editing' | 'saving' | 'saved'
}

const Status = ({ status }: StatusProps) => (
  <S.Wrapper>
    {status === 'saving' && (
      <S.IconContainer animation='rotation'>
        <LoadingIcon />
      </S.IconContainer>
    )}
    {status === 'saved' && (
      <S.IconContainer>
        <UpdateIcon />
      </S.IconContainer>
    )}
    {status === 'editing' && (
      <S.IconContainer animation='pulse'>
        <CircleIcon />
      </S.IconContainer>
    )}
  </S.Wrapper>
)

export { Status }
