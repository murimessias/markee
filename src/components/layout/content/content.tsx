import { ChangeEvent, RefObject } from 'react'
import marked from 'marked'

// Components
import { FileIcon } from 'ui/icons'

// Styles
import * as S from './content-styles'

// Types & Props
import { FileProps } from 'resources/types'

// Marked configs using HighlightJS
import('highlight.js').then((hljs) => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

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
            placeholder='Insira o seu texto aqui!'
          />
          <S.Article
            dangerouslySetInnerHTML={{ __html: marked(file.content) }}
          />
        </S.ContentContainer>
      </S.Container>
    </S.ContentWrapper>
  )
}

export { Content }
