import styled, { css, DefaultTheme } from 'styled-components/macro'
import { FileProps } from 'resources/types'

export const SidebarWrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundBlack};
    color: ${theme.colors.secondaryTextColor};
    grid-area: sidebar;
    padding: 0 3.2rem;

    @media screen and (max-width: 768px) {
      padding-bottom: 3.2rem;
    }
  `}
`

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const LogoContainer = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 4.4rem auto 5.6rem;
  width: 16rem;

  @media screen and (max-width: 768px) {
    margin: 3.2rem auto 4rem;
    width: 12rem;
  }
`

export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    align-self: center;
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

    @media screen and (max-width: 768px) {
      bottom: 0;
      max-width: 24rem;
      position: fixed;
      right: 50%;
      transform: translateX(50%);
      z-index: 1;
    }
  `}
`

export const FilesWrapper = styled.nav`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    @media screen and (max-width: 768px) {
      &:before {
        background: linear-gradient(
          90deg,
          ${theme.colors.backgroundBlack} 0%,
          rgba(26, 36, 51, 0) 100%
        );
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 20px;
        z-index: 2;
      }

      &:after {
        background: linear-gradient(
          270deg,
          ${theme.colors.backgroundBlack} 0%,
          rgba(26, 36, 51, 0) 100%
        );
        content: '';
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        z-index: 2;
      }
    }
  `}
`

export const FilesList = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  overflow: initial;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: start;
    overflow: auto;
  }
`

const wrapperModifiers = {
  active: (theme: DefaultTheme) =>
    css`
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.secondaryTextColor};

      ${FilenameContainer} {
        opacity: 1;
      }

      ${IconContainer} {
        color: ${theme.colors.primary};
        opacity: 1;
      }

      ${DeleteButton} {
        @media (min-width: 768px) {
          display: block;
        }
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

  @media screen and (max-width: 768px) {
    & + li {
      margin-top: 0rem;
      margin-left: 1.4rem;
    }
  }
`

export const FileContainer = styled.a<FileContainerProps>`
  ${({ theme, active }) => css`
    align-items: center;
    color: ${theme.colors.gray};
    display: inline-flex;
    justify-content: space-between;
    padding: 1.6rem;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.25ms ease-in-out;
    width: 100%;

    @media screen and (max-width: 768px) {
      margin: 1.6rem 0;
      min-width: 20rem;
    }

    &:hover {
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.secondaryTextColor};
      cursor: pointer;

      ${FilenameContainer} {
        opacity: 1;
      }

      ${IconContainer} {
        color: ${theme.colors.secondaryTextColor};
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
    color: ${theme.colors.secondaryTextColor};
    height: 100%;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      outline: 2px solid ${theme.colors.primary};
      border-radius: ${theme.border.radius};
    }

    @media (max-width: 768px) {
      display: block;
    }
  `}
`

export const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`

export const ModalButtonWrapper = styled.button`
  ${({ theme }) => css`
    align-self: center;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};
    margin-top: 1.6rem;
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
