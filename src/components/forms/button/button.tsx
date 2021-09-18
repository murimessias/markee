import { ReactElement } from 'react'

// Styles
import * as S from './button-styles'

// Types & Props
type ButtonProps = {
  cta: string
  icon?: ReactElement
  addNewFile: () => void
}

const Button = ({ cta, icon, addNewFile }: ButtonProps) => (
  <S.ButtonWrapper hasIcon={!!icon} onClick={addNewFile}>
    {!!icon && <div>{icon}</div>}
    <span>{cta}</span>
  </S.ButtonWrapper>
)

export { Button }
