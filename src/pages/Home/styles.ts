import styled from 'styled-components'

export const HomeContainer = styled.div`
    
`

export const IntroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 4rem;
    max-width: 64rem;

    @media (max-width: 768px) {
        max-width: 44rem;
    }

    @media (max-width: 1024px) {
        max-width: 54rem;
    }
`

export const IntroWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    gap: 1.5rem;

    div {
    
        p {
            margin: 1.75rem 0;
        }
    }
`

export const TopicsContainer = styled(Container)`
    display: grid;

    h1 {
        text-align: center;
        position: relative;
        margin: 20px 0;
    }

    h1::before,
    h1::after {
    content: '';
        position: absolute;
        top: 50%;
        width: 34%; /* Controla o comprimento da linha */
        border-top: 2px solid ${({ theme }) => theme.colors.primary};
    }

    h1::before {
        left: 0;
    }

    h1::after {
        right: 0;
    }
    
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;

        li {
            text-align: center;
        }

    }
`

export const Topic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const IconContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 54px;
    height: 54px;
    padding: 0.5rem;
    margin-bottom: 1rem;
`

export const PreviewContainer = styled.div`
    ${({ theme }) => theme.colors.primary}
`

export const PreviewWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    justify-content: center;
    align-items: center;

    img {
        max-width: 300px;
    }
`

export const NoteContainer = styled.div`
    
`

export const ReadersContainer = styled.div`
    
`

export const PriceContainer = styled.div`
    
`
