// Components
import { AddIcon } from 'ui/icons'
import { Button } from 'components/forms'
import { FileList } from '.'
import { Logo } from 'ui/logo'

// Styles
import * as S from './sidebar-styles'

// Props & Types
import { FileProps } from 'resources/types'
type SidebarProps = {
  files: FileProps[]
  onNewFile: () => void
}

const Sidebar = ({ files, onNewFile }: SidebarProps) => {
  return (
    <S.SidebarWrapper>
      <S.Container>
        <S.LogoContainer href='/'>
          <Logo />
        </S.LogoContainer>

        <S.FilesContainer>
          <S.Title>
            <span>Arquivos</span>
          </S.Title>

          <Button
            icon={<AddIcon />}
            cta='Adicionar arquivo'
            addNewFile={onNewFile}
          />

          <FileList files={files} />
        </S.FilesContainer>
      </S.Container>
    </S.SidebarWrapper>
  )
}

export { Sidebar }
