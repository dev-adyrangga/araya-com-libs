import React, { ReactNode } from 'react'
import { StyledButton } from './styles'
import { VariantName } from '../../types'

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VariantName
  /**
   * What background color to use
   */
  textColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string | ReactNode
  /**
   * Optional click handler
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  type = 'button',
  variant = 'primary',
  textColor,
  onClick,
  label,
  disabled
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      style={textColor ? { color: textColor } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  )
}

export default Button
