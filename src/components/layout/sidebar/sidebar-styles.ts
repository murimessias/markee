import styled, { css, DefaultTheme } from 'styled-components/macro'
import { FileProps } from 'resources/types'

export const SidebarWrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    grid-area: sidebar;
    padding: 0 3.2rem;
  `}
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
`

export const LogoContainer = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 4.4rem auto 5.6rem;
  width: 16rem;
`

export const FilesContainer = styled.div`
  > button {
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
      height: 0.2rem;
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
  `}
`

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};
    max-width: 40rem;
    padding: 1rem 2rem;
    transition: all 250ms ease-in-out;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.75);
    }

    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `}
`

export const FilesWrapper = styled.nav``

export const FilesList = styled.ul`
  list-style: none;
`

const wrapperModifiers = {
  active: (theme: DefaultTheme) =>
    css`
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.white};

      ${FilenameContainer} {
        opacity: 1;
      }

      ${IconContainer} {
        color: ${theme.colors.primary};
        opacity: 1;
      }

      &:hover {
        ${IconContainer} {
          color: ${theme.colors.primary};
        }
      }
    `,
}

type FileContainerProps = Pick<FileProps, 'active'>

export const FileWrapper = styled.li`
  list-style: none;

  & + li {
    margin-top: 2.4rem;
  }
`

export const FileContainer = styled.a<FileContainerProps>`
  ${({ theme, active }) => css`
    align-items: center;
    color: ${theme.colors.gray};
    display: inline-flex;
    justify-content: space-between;
    padding: 1.6rem;
    text-decoration: none;
    transition: all 0.25ms ease-in-out;
    width: 100%;

    &:hover {
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.white};
      cursor: pointer;

      ${FilenameContainer} {
        opacity: 1;
      }

      ${IconContainer} {
        color: ${theme.colors.white};
        opacity: 1;
      }

      ${DeleteButton} {
        display: block;
      }
    }

    ${active && wrapperModifiers.active(theme)}
  `}
`

export const FilenameContainer = styled.div`
  flex: 1;
  padding-left: 2.4rem;
  opacity: 0.25;
  transition: all 0.25ms ease-in;
`

export const IconContainer = styled.div`
  height: 2.4rem;
  opacity: 0.25;
  transition: all 0.25ms ease-in-out;
  width: 2.4rem;
`

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    background-color: inherit;
    display: none;
    color: ${theme.colors.white};
    height: 100%;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      outline: 2px solid ${theme.colors.primary};
      border-radius: ${theme.border.radius};
    }
  `}
`
