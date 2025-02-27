import { forwardRef } from 'react'
import { ButtonContainer } from './styles'

type ButtonType = 'button' | 'reset' | 'submit'

type ButtonProps = {
  children: React.ReactNode
  type: ButtonType
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type }, ref) => {
    return (
      <ButtonContainer type={type} ref={ref}>
        {children}
      </ButtonContainer>
    )
  }
)
