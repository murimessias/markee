import styled, { css } from 'styled-components/macro'

export const ModalContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.sm};
  `}
`

export const ModalTitle = styled.h3`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.md};
      text-align: center;
      position: relative;

      &:after {
        background-color: ${theme.colors.primary};
        bottom: -0.8rem;
        content: '';
        height: 2px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 16rem;
      }
    `}
`

export const ModalTip = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};

    & + div {
      margin-top: 0.8rem;
    }

    ul {
      list-style-type: none;
      font-family: ${theme.font.mono};
    }

    li {
      margin-top: 0.2rem;
    }

    h4 {
      font-size: ${theme.font.sizes.sm};
    }
  `}
`

export const ModalTipContainer = styled.div`
  margin-top: 1.6rem;
`
