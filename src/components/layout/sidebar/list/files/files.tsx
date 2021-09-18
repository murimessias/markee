// Components
import { File } from 'components/layout'

// Styles
import * as S from './files-styles'

// Types & Props
import { FileProps } from 'resources/types'

type FilesProps = {
  files: FileProps[]
}

const FileList = ({ files }: FilesProps) => (
  <S.FilesWrapper>
    <S.FilesList>
      {files.map((file) => (
        <File key={file.id} {...file} />
      ))}
    </S.FilesList>
  </S.FilesWrapper>
)

export { FileList }
