import styled, { keyframes } from 'styled-components/macro'

import * as icon from 'ui/icons'

export const StatusWrapper = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`

const animations = {
  pulse: () =>
    keyframes`
      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    `,

  rotation: () =>
    keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(359deg);
      }
    `,
}

export const EditIcon = styled(icon.CircleIcon)`
  margin-right: 0.2rem;
  animation: ${animations.pulse} 1400ms ease-in-out infinite;
`

export const LoadingIcon = styled(icon.LoadingIcon)`
  animation: ${animations.rotation} 1600ms infinite linear;
`

export const SavedIcon = styled(icon.SavedIcon)``
