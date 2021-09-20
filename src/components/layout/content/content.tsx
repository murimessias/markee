import { ChangeEvent, useState } from 'react'

// Components
import { FileIcon } from 'ui/icons'
import { TextArea } from 'components/forms'

// Styles
import * as S from './content-styles'
import { Article } from './article'

// Types & Props
import { FileProps } from 'resources/types'

type ContentProps = {
  file?: FileProps
  onChangeFilename: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
}

const Content = ({ file, onChangeFilename }: ContentProps) => {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setContent(e.target.value)
  }

  if (!file) {
    return null
  }

  return (
    <S.ContentWrapper>
      <S.Container>
        <S.Header>
          <S.IconContainer>
            <FileIcon />
          </S.IconContainer>

          <S.Input
            type='text'
            onChange={onChangeFilename(file.id)}
            value={file.name}
            autoFocus
          />
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
