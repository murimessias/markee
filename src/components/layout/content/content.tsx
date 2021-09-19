import { ChangeEvent, useState } from 'react'

// Components
import { FileIcon } from 'ui/icons'
import { Input, TextArea } from 'components/forms'

// Styles
import * as S from './content-styles'
import { Article } from './article'

const Content = () => {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setContent(e.target.value)
  }

  return (
    <S.ContentWrapper>
      <S.Container>
        <S.Header>
          <S.IconContainer>
            <FileIcon />
          </S.IconContainer>

          <Input />
        </S.Header>

        <S.ContentContainer>
          <TextArea handleChangeContent={handleChangeContent} />
          <Article content={content} />
        </S.ContentContainer>
      </S.Container>
    </S.ContentWrapper>
  )
}

export { Content }
