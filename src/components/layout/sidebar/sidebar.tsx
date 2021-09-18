import { useState } from 'react'
import { v4 } from 'uuid'

// Components
import { AddIcon } from 'ui/icons'
import { Button } from 'components/forms'
import { FileList } from '.'
import { Logo } from 'ui/logo'

// Styles
import * as S from './sidebar-styles'

// Props & Types
import { FileProps } from 'resources/types'

const Sidebar = () => {
  const [files, setFiles] = useState<FileProps[]>([])

  const handleCreateNewFile = () => {
    setFiles((files) =>
      files
        .map((file) => ({
          ...file,
          active: false,
        }))
        .concat({
          id: v4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }),
    )
  }

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
            addNewFile={handleCreateNewFile}
          />

          <FileList files={files} />
        </S.FilesContainer>
      </S.Container>
    </S.SidebarWrapper>
  )
}

export { Sidebar }
