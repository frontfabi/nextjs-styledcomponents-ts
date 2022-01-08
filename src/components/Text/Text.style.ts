import styled from "styled-components"
import { TextProps } from './Text'

const StyledText = styled.p<TextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, font }) => theme.fonts.types[font]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ theme, size }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
`

export { StyledText }
