import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Container = styled.div`
    margin: 0 auto;
    padding: 6rem 0;
    max-width: 64rem;

    @media (max-width: 1280px) {
        max-width: 54rem;
        padding: 4rem 2rem;
    }
`

export const IntroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
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

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const TopicsContainer = styled.div``

export const TopicsWrapper = styled(Container)`
    display: grid;
    
    ul {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, 1fr);
        list-style: none;

        li {
            text-align: center;
        }

    }

    @media (max-width: 768px) {
        ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 425px) {
        ul{
            grid-template-columns: 1fr;
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
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const PreviewWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    gap: 1.5rem;

    div {
    
        p {
            margin: 1.75rem 0;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ReadersContainer = styled.div``

export const ReadersWrapper = styled(Container)``

export const Readers = styled.div`
    position: relative;
    padding: 20px;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const PriceContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const PriceWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    
    gap: 1.5rem;

    img{
        grid-area: image;
        width: 350px;
        height: auto;
    }

    grid-template-areas: 
    "content image";

    @media (max-width: 768px) {
        img {
            margin: 0 left;
        }

        grid-template-columns: 1fr;
        grid-template-areas:
        "image"
        "content"; /* Em telas pequenas, coloca a imagem primeiro */
    }

    @media (max-width: 425px) {
        img {
            width: 200px;
        }
    }
`

export const PriceContent = styled.div`
    grid-area: content;

    h1{
        margin-bottom: 0.5rem;
    }

    p {
        font-weight: bold;
        margin-bottom: 1.75rem;
    }

    ul {
        margin-left: 1.25rem;
        margin-bottom: 1.75rem;
    }
`
