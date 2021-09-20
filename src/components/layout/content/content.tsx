import { ChangeEvent, RefObject } from 'react'

// Components
import { FileIcon } from 'ui/icons'

// Styles
import * as S from './content-styles'

// Types & Props
import { FileProps } from 'resources/types'

type ContentProps = {
  file?: Pick<FileProps, 'id' | 'name' | 'content'>
  inputRef: RefObject<HTMLInputElement>
  onChangeFilename: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onChangeFileContent: (
    id: string,
  ) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Content = ({
  file,
  inputRef,
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
            ref={inputRef}
            type='text'
            onChange={onChangeFilename(file.id)}
            value={file.name}
            autoFocus
          />
        </S.Header>

        <S.ContentContainer>
          <S.TextArea
            onChange={onChangeFileContent(file.id)}
            value={file.content}
          />
          <S.Article>{file.content}</S.Article>
        </S.ContentContainer>
      </S.Container>
    </S.ContentWrapper>
  )
}

export { Content }
