import { Input as FileName, TextArea as FileEdit } from 'components/forms'
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

        <FileName />
      </S.Header>

      <S.ContentContainer>
        <FileEdit />
        <div>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </S.ContentContainer>
    </S.Container>
  </S.Wrapper>
)

export { Content }
