import styled from 'styled-components'

export const ReaderContainer = styled.div`
    display: flex;
    gap: 20px;

    box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.primary};

    padding: 2rem 2rem 2rem 4rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    perspective: 800px;
`
