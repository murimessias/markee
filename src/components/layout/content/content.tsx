// Components
import { FileIcon } from 'ui/icons'
import { Input, TextArea } from 'components/forms'

// Styles
import * as S from './content-styles'
import { Article } from './article'

const Content = () => (
  <S.ContentWrapper>
    <S.Container>
      <S.Header>
        <S.IconContainer>
          <FileIcon />
        </S.IconContainer>

        <Input />
      </S.Header>

      <S.ContentContainer>
        <TextArea />
        <Article>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </Article>
      </S.ContentContainer>
    </S.Container>
  </S.ContentWrapper>
)

export { Content }
