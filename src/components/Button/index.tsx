import { ButtonContainer } from './styles'

type ButtonType = 'button' | 'reset' | 'submit'

type ButtonProps = {
  children: React.ReactNode
  type: ButtonType
}

export function Button({ children, type }: ButtonProps) {
  return <ButtonContainer type={type}>{children}</ButtonContainer>
}
