import { MouseEvent } from 'react'

// Components
import { AddIcon, FileIcon, RemoveIcon } from 'ui/icons'
import { Logo } from 'ui/logo'
import { Status } from './status'

// Styles
import * as S from './sidebar-styles'

// Props & Types
import { FileProps } from 'resources/types'
type SidebarProps = {
  files: FileProps[]
  onNewFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onDeleteFile: (id: string) => void
}

const Sidebar = ({
  files,
  onNewFile,
  onSelectFile,
  onDeleteFile,
}: SidebarProps) => (
  <S.SidebarWrapper>
    <S.SidebarContainer>
      <S.LogoContainer href='/'>
        <Logo />
      </S.LogoContainer>

      <S.FilesContainer>
        <S.Title>
          <span>Arquivos</span>
        </S.Title>

        <S.ButtonWrapper onClick={onNewFile}>
          <AddIcon />
          <span>Adicionar arquivo</span>
        </S.ButtonWrapper>

        <S.FilesWrapper>
          <S.FilesList>
            {files.map(({ id, active, status, name }) => (
              <S.FileWrapper key={id}>
                <S.FileContainer
                  active={active}
                  href={`/file/${id}`}
                  onClick={onSelectFile(id)}
                >
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
                        onClick={() => onDeleteFile(id)}
                      >
                        <RemoveIcon />
                      </S.DeleteButton>
                    )}
                  </S.IconContainer>
                </S.FileContainer>
              </S.FileWrapper>
            ))}
          </S.FilesList>
        </S.FilesWrapper>
      </S.FilesContainer>
    </S.SidebarContainer>
  </S.SidebarWrapper>
)

export { Sidebar }
