import { FileProps } from 'resources/types'
import styled, { css, DefaultTheme } from 'styled-components/macro'

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
