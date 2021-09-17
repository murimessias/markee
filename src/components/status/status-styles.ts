import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.div``

type IconContainerProps = {
  animation?: 'rotation' | 'pulse'
}

export const IconContainer = styled.div<IconContainerProps>`
  ${({ animation }) => css`
    align-items: center;
    animation: ${animation === 'rotation' && 'rotation 1600ms linear infinite'};
    animation: ${animation === 'pulse' && 'pulse 2000ms ease-in-out infinite'};
    display: flex;
    height: 100%;
    justify-content: center;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(359deg);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }
  `}
`
