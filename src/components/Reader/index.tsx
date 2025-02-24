import { ReaderContainer } from './styles'

interface ReaderProps {
  name: string
  message: string
}

export function Reader({ name, message }: ReaderProps) {
  return (
    <ReaderContainer>
      <div>
        <p>{message}</p>
        <h3>{name}</h3>
      </div>
    </ReaderContainer>
  )
}
