import styled, { css } from 'styled-components'

export const ReaderContainer = styled.div<{ position?: 'left' | 'right' }>`
    display: flex;

    box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.primary};

    padding: ${({ position }) =>
      position === 'left'
        ? css`2rem 2rem 2rem 4rem`
        : css`2rem 4rem 2rem 2rem`};

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

    }

    perspective: 800px;
`

export const Avatar = styled.div<{ position?: 'left' | 'right' }>`
    position: absolute;
    
    ${({ position }) =>
      position === 'right'
        ? css`
          right: -40px;
        `
        : css`
          left: -40px;
        `}

    width: 80px;
    height: 80px;
    border-radius: 100%; 
    overflow: hidden;
    box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.primary};

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
