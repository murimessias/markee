import styled, { css } from 'styled-components/macro'

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 3.2rem;
    background-color: ${theme.colors.background};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: grid;
    height: 100%;
    grid:
      'header' 4rem
      'content' auto;
  `}

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  grid-area: header;
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: 2.4rem;
    margin-right: 0.8rem;
    width: 2.4rem;
  `}
`

export const ContentContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    gap: 6.4rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 3.2rem 0;
    position: relative;

    &:before {
      background-color: ${theme.colors.gray};
      content: '';
      height: 100%;
      left: 50%;
      position: absolute;
      opacity: 0.5;
      transform: translateX(-50%) scaleY(-0.95);
      top: 0;
      width: 2px;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;

      &:before {
        display: none;
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    border: none;
    background-color: inherit;
    color: ${theme.colors.textColor};
    display: flex;
    flex: 1;
    height: 100%;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.bold};
    width: 100%;
  `}
`

export const Article = styled.article`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    overflow: hidden;
    width: 100%;


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

    @media screen and (max-width: 768px) {
      h1 {
      font-size: ${theme.font.sizes['3xl']};
      }

      h2 {
        font-size: ${theme.font.sizes['2xl']};
      }

      h3 {
        font-size: ${theme.font.sizes.xl};
      }

      h4 {
        font-size: ${theme.font.sizes.md};
      }

      h5, h6 {
        font-size ${theme.font.sizes.sm};
      }
    }
  `}
`

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    color: ${theme.colors.textColor};
    font-family: ${theme.font.mono};
    font-size: ${theme.font.sizes.lg};
    resize: none;

    @media screen and (max-width: 768px) {
      border-bottom: 2px solid ${theme.colors.gray};
      min-height: 18rem;
    }
  `}
`
