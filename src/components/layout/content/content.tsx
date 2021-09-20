import { ChangeEvent } from 'react'

// Components
import { FileIcon } from 'ui/icons'

// Styles
import * as S from './content-styles'

// Types & Props
import { FileProps } from 'resources/types'

type ContentProps = {
  file?: Pick<FileProps, 'id' | 'name' | 'content'>
  onChangeFilename: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onChangeFileContent: (
    id: string,
  ) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Content = ({
  file,
  onChangeFilename,
  onChangeFileContent,
}: ContentProps) => {
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
            value={file.name}
            onChange={onChangeFilename(file.id)}
            autoFocus
          />
        </S.Header>

        <S.ContentContainer>
          <S.TextArea
            placeholder='Digite o seu conteúdo aqui!'
            value={file.content}
            onChange={onChangeFileContent(file.id)}
          />
          <S.Article>{file.content}</S.Article>
        </S.ContentContainer>
      </S.Container>
    </S.ContentWrapper>
  )
}

export { Content }
