import { ReactElement } from 'react'

// Styles
import * as S from './button-styles'

// Types & Props
type ButtonProps = {
  cta: string
  icon?: ReactElement
}

const Button = ({ cta, icon }: ButtonProps) => (
  <S.ButtonWrapper hasIcon={!!icon}>
    {!!icon && <div>{icon}</div>}
    <span>{cta}</span>
  </S.ButtonWrapper>
)

export { Button }
