// Components

// Styles
import { File, FileProps } from 'components/layout'
import * as S from './files-styles'

// Types & Props

type FilesProps = {
  files: FileProps[]
}

const FileList = ({ files }: FilesProps) => (
  <S.Wrapper>
    <S.List>
      {files.map((file) => (
        <File key={file.id} {...file} />
      ))}
    </S.List>
  </S.Wrapper>
)

export { FileList }
