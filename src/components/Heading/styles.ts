import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`

export const HeadingContent = styled.h1`
  text-align: center;
`

export const HeadingLines = styled.div`
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  transform: translateY(-50%);
`
