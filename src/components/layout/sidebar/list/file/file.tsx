// Components
import { Status } from 'components/status'
import { FileIcon, RemoveIcon } from 'ui/icons'

// Styles
import * as S from './file-styles'

// Types & Props
import { FileProps } from 'resources/types'

const File = ({ id, name, content, active, status }: FileProps) => (
  <S.FileWrapper key={id}>
    <S.FileContainer active={active} href={`/file/${id}`}>
      <S.IconContainer>
        <FileIcon />
      </S.IconContainer>

      <S.FilenameContainer>{name}</S.FilenameContainer>

      <S.IconContainer>
        {active && <Status status={status} />}

        {!active && (
          <S.DeleteButton
            aria-label='Remover arquivo'
            title={`Remover o arquivo ${name}`}
          >
            <RemoveIcon />
          </S.DeleteButton>
        )}

        {content && console.log('content: ', content)}
      </S.IconContainer>
    </S.FileContainer>
  </S.FileWrapper>
)

export { File }
