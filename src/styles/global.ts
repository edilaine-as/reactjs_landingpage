import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors['base-background']};
        color: ${props => props.theme.colors['base-text']};

        font-family: ${({ theme }) => theme.fonts.body}; 
    }

    h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`
