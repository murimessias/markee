// Components
import { AddIcon } from 'ui/icons'
import { Button } from 'components/forms'
import { FileList } from '.'
import { Logo } from 'ui/logo'

// Styles
import * as S from './sidebar-styles'

// Props & Types
import { FileProps } from 'resources/types'

// Data
const files: FileProps[] = [
  {
    id: '1',
    name: 'Editando.md',
    content: 'Conteúdo 1',
    active: true,
    status: 'editing',
  },
  {
    id: '2',
    name: 'Salvo.md',
    content: 'Conteúdo 2',
    active: true,
    status: 'saved',
  },
  {
    id: '3',
    name: 'Salvando.md',
    content: 'Conteúdo 3',
    active: true,
    status: 'saving',
  },
  {
    id: '4',
    name: 'Deletar.md',
    content: 'Conteúdo 4',
    active: false,
    status: 'saving',
  },
]

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.Container>
      <S.LogoContainer href='/'>
        <Logo />
      </S.LogoContainer>

      <S.FilesContainer>
        <S.Title>
          <span>Arquivos</span>
        </S.Title>

        <Button icon={<AddIcon />} cta='Adicionar arquivo' />

        <FileList files={files} />
      </S.FilesContainer>
    </S.Container>
  </S.SidebarWrapper>
)

export { Sidebar }
