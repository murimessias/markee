import { ReactNode } from 'react'

// Styles
import { Wrapper } from './styles'

type GridProps = {
  children: ReactNode
}

const Grid = ({ children }: GridProps) => <Wrapper>{children}</Wrapper>

export { Grid }
