import { FileIcon } from 'ui/icons'

// Styles
import * as S from './styles'

const Content = () => (
  <S.Wrapper>
    <S.Container>
      <S.Header>
        <S.IconContainer>
          <FileIcon />
        </S.IconContainer>

        <S.Input type='text' defaultValue='Novo arquivo.md' />
      </S.Header>

      <S.ContentContainer>
        <S.TextArea defaultValue='## Bootcamp Brainn Co.' />
        <div>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </S.ContentContainer>
    </S.Container>
  </S.Wrapper>
)

export { Content }
