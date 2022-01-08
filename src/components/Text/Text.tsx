import React, { ReactNode } from 'react';
import { StyledText } from './Text.style';

type TextColor = 'bg' | 'fg' | 'primary' | 'secondary'
type TextSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TextFamily = 'body' | 'title'
export interface TextProps {
  children: ReactNode
  color?: TextColor
  weight?: string
  size?: TextSize
  font?: TextFamily
}

const Text = ({ children, color = 'fg', weight = 'normal', size = 'default', font = 'title' }: TextProps) => (
  <StyledText color={color} weight={weight} size={size} font={font} data-testid="Text">
    {children}
  </StyledText>
);

export { Text };
