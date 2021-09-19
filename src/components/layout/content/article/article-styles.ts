import styled, { css } from 'styled-components/macro'

export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes['4xl']};
      line-height: calc(${theme.font.sizes['4xl']} * 1.15);
    }

    h2 {
      font-size: ${theme.font.sizes['3xl']};
      line-height: calc(${theme.font.sizes['3xl']} * 1.15);
    }

    h3 {
      font-size: ${theme.font.sizes['2xl']};
    }

    h4 {
      font-size: ${theme.font.sizes.xl};
    }

    h5, h6 {
      font-size ${theme.font.sizes.md};
    }

    ul, ol {
      padding-left: 2.4rem;
    }

    pre, code {
      margin: 2.4rem 0;
      font-family: ${theme.font.mono};
      font-size: ${theme.font.sizes.md};
    }

    p {
      font-size: ${theme.font.sizes.md};
      margin-top: 1.6rem;

      &:last-of-type {
        margin-bottom: 1.6rem;
      }
    }
  `}
`
