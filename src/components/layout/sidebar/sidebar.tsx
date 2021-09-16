import { Button } from 'components/forms'
import {
  AddIcon,
  FileIcon,
  UpdateIcon,
  LoadingIcon,
  CircleIcon,
  RemoveIcon,
} from 'ui/icons'
import { Logo } from 'ui/logo'

// Styles
import * as S from './styles'

// Types & Props
export type FileProps = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
  hasDelete?: boolean
}

// Data
const files: FileProps[] = [
  {
    id: '1',
    name: 'Editando.md',
    content: 'Conteúdo',
    active: true,
    status: 'editing',
  },
  {
    id: '2',
    name: 'Salvo.md',
    content: 'Conteúdo',
    active: true,
    status: 'saved',
  },
  {
    id: '3',
    name: 'Salvando.md',
    content: 'Conteúdo',
    active: true,
    status: 'saving',
  },
  {
    id: '4',
    name: 'Deletar.md',
    content: 'Conteúdo',
    active: false,
    status: 'saving',
    hasDelete: true,
  },
  {
    id: '5',
    name: 'Arquivo.md',
    content: 'Conteúdo',
    active: false,
    status: 'saving',
  },
]

const Sidebar = () => (
  <S.Wrapper>
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>

      <S.FilesContainer>
        <S.Title>
          <span>Arquivos</span>
        </S.Title>

        <Button icon={<AddIcon />} cta='Adicionar arquivo' />

        <nav>
          <ul>
            {files.map(({ id, name, status, active, hasDelete }) => (
              <S.FileWrapper key={id}>
                <S.FileContainer active={active} href='/'>
                  <S.IconContainer>
                    <FileIcon />
                  </S.IconContainer>

                  <S.FilenameContainer>{name}</S.FilenameContainer>

                  <S.IconContainer>
                    {active && (
                      <>
                        {status === 'saving' && (
                          <S.StatusIconContainer animation='rotation'>
                            <LoadingIcon />
                          </S.StatusIconContainer>
                        )}
                        {status === 'saved' && (
                          <S.StatusIconContainer>
                            <UpdateIcon />
                          </S.StatusIconContainer>
                        )}
                        {status === 'editing' && (
                          <S.StatusIconContainer animation='pulse'>
                            <CircleIcon />
                          </S.StatusIconContainer>
                        )}
                      </>
                    )}

                    {hasDelete && (
                      <S.DeleteButton>
                        <RemoveIcon />
                      </S.DeleteButton>
                    )}
                  </S.IconContainer>
                </S.FileContainer>
              </S.FileWrapper>
            ))}
          </ul>
        </nav>
      </S.FilesContainer>
    </S.Container>
  </S.Wrapper>
)

export { Sidebar }
