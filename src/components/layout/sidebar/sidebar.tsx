import { MouseEvent } from 'react'

// Components
import { AddIcon, FileIcon, RemoveIcon, ShortcutIcon } from 'ui/icons'
import { Logo } from 'ui/logo'
import { Status } from './status'
import { Modal } from './modal'

// Styles
import * as S from './sidebar-styles'

// Props & Types
import { FileProps } from 'resources/types'
import { useModal } from 'resources/hooks/use-modal'
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
}: SidebarProps) => {
  const { handleOpenModal, modalIsOpen } = useModal()

  return (
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

        <S.TipsContainer>
          <S.Title>
            <span>Dicas</span>
          </S.Title>

          <Modal isOpen={modalIsOpen} onClose={handleOpenModal} />
          <S.ModalButtonWrapper
            onClick={handleOpenModal}
            title='Atalhos para utilizar no Markdown'
          >
            <ShortcutIcon />
            <span>Atalhos Markdown</span>
          </S.ModalButtonWrapper>
        </S.TipsContainer>
      </S.SidebarContainer>
    </S.SidebarWrapper>
  )
}

export { Sidebar }
