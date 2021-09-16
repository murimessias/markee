import { Button } from 'components/forms'
import { AddIcon } from 'ui/icons'
import { Logo } from 'ui/logo'

// Styles
import * as S from './styles'

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
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </nav>
      </S.FilesContainer>
    </S.Container>
  </S.Wrapper>
)

export { Sidebar }
