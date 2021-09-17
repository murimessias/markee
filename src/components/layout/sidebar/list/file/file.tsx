// Components
import { Status } from 'components/status'
import { FileIcon, RemoveIcon } from 'ui/icons'

// Styles
import * as S from './file-styles'

export type FileProps = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

const File = ({ id, name, content, active, status }: FileProps) => (
  <S.FileWrapper key={id}>
    <S.FileContainer active={active} href='/'>
      <S.IconContainer>
        <FileIcon />
      </S.IconContainer>

      <S.FilenameContainer>{name}</S.FilenameContainer>

      <S.IconContainer>
        {active && <Status status={status} />}

        {!active && (
          <S.DeleteButton>
            <RemoveIcon />
          </S.DeleteButton>
        )}

        {content && console.log('content: ', content)}
      </S.IconContainer>
    </S.FileContainer>
  </S.FileWrapper>
)

export { File }
