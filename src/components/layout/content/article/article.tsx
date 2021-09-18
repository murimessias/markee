import { ReactNode } from 'react'

// Styles
import * as S from './article-styles'

// Types & Props
type ArticleProps = {
  children: ReactNode
}

const Article = ({ children }: ArticleProps) => (
  <S.ArticleWrapper>{children}</S.ArticleWrapper>
)

export { Article }
