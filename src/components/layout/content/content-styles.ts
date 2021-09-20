import styled, { css } from 'styled-components/macro'

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 3.2rem;
    background-color: ${theme.colors.white};
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
      transform: translateX(-50%) scaleY(-0.95);
      top: 0;
      width: 2px;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    align-items: center;
    border: none;
    background-color: inherit;
    display: flex;
    flex: 1;
    height: 100%;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.bold};
    width: 100%;
  `}
`
