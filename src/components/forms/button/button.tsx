import { ReactNode } from 'react'

// Styles
import { Wrapper } from './button-styles'

type ButtonProps = {
  cta: string
  icon?: ReactNode
}

const Button = ({ cta, icon }: ButtonProps) => (
  <Wrapper hasIcon={!!icon}>
    {!!icon && icon}
    <span>{cta}</span>
  </Wrapper>
)

export { Button }
