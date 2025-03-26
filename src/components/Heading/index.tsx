import { forwardRef } from 'react'
import { HeadingLines, Wrapper, HeadingContent } from './styles'

interface HeadingProps {
  children: React.ReactNode
}

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ children }, ref) => {
    return (
      <Wrapper ref={ref}>
        <HeadingLines />
        <HeadingContent>{children}</HeadingContent>
        <HeadingLines />
      </Wrapper>
    )
  }
)
