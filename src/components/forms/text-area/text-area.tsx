import { ChangeEvent } from 'react'

// Styles
import * as S from './text-area-styles'

type TextAreaProps = {
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ handleChangeContent }: TextAreaProps) => (
  <S.TextAreaWrapper
    placeholder='## Bootcamp Brainn Co.'
    onChange={handleChangeContent}
  />
)

export { TextArea }
