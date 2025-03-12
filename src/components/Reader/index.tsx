import { forwardRef } from 'react'
import { ReaderContainer } from './styles'

interface ReaderProps {
  name: string
  message: string
}

export const Reader = forwardRef<HTMLDivElement, ReaderProps>(
  ({ name, message }, ref) => {
    return (
      <ReaderContainer ref={ref}>
        <div>
          <p>{message}</p>
          <h3>{name}</h3>
        </div>
      </ReaderContainer>
    )
  }
)
