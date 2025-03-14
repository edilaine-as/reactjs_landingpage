import { forwardRef } from 'react'
import { Avatar, ReaderContainer } from './styles'

interface ReaderProps {
  name: string
  message: string
  position: 'left' | 'right'
  image: string
}

export const Reader = forwardRef<HTMLDivElement, ReaderProps>(
  ({ name, message, position, image }, ref) => {
    return (
      <ReaderContainer ref={ref} position={position}>
        <Avatar position={position}>
          <img src={image} alt="" />
        </Avatar>
        <div>
          <p>{message}</p>
          <h3>{name}</h3>
        </div>
      </ReaderContainer>
    )
  }
)
