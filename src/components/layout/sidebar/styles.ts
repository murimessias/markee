import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    grid-area: sidebar;
    padding: 0 3.2rem ;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
`

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4.4rem auto 5.6rem;
  width: 16rem;
`

export const FilesContainer = styled.div`
  > button  {
    margin: 2.4rem 0;
  }
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    position: relative;

    &:before {
      content: '';
      background-color: ${theme.colors.primary};
      display: block;
      height: .2rem;
      position: absolute;
      top: 50%;
      width: 100%;
      z-index: 1;
    }

    span {
      background-color: ${theme.colors.black};
      margin-left: 1.6rem;
      padding: 0 1.2rem;
      position: relative;
      z-index: 5;
    }
  `
  }
`

export const FilenameContainer = styled.div`
  flex: 1;
  padding-left: 2.4rem;
  opacity: .25;
  transition: all .250ms ease-in;
`
