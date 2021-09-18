import { ReactNode } from 'react'

// Styles
import * as S from './main-styles'

// Types & Props
type GridProps = {
  children: ReactNode
}

const Main = ({ children }: GridProps) => (
  <S.MainWrapper>{children}</S.MainWrapper>
)

export { Main }
