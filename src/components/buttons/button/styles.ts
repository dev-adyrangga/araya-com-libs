import styled, { css } from 'styled-components'
import { VariantName } from '../../types'

const variantStyle = {
  primary: css`
    background-color: var(--primary-color);
  `,
  secondary: css`
    background-color: green;
  `
}

export const StyledButton = styled.button<{ variant: VariantName }>`
  ${({ variant }) => variantStyle[variant]}
`
