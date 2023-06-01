import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  :root {
    --primary-color: #2196F3;
    button {
      border: none;
      outline: none;
      color: white;
      padding: 0.25rem 0.5rem;
      :disabled {
        cursor: not-allowed;
      }
      :not(:disabled) {
        cursor: pointer;
        :active {
          opacity: 0.8;
        }
      }
    }
  }
  /* body {
    color: ${(props) => (props.$whiteColor ? 'white' : 'black')};
  } */
`

export default GlobalStyle
