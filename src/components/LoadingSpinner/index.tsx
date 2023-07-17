import { DefaultTheme, useTheme } from 'styled-components';

import { CircleNotch } from 'phosphor-react';

import { Container } from './styles';

interface LoadingSpinnerProps {
  color: keyof DefaultTheme['colors'];
  size: string | number;
}

export function LoadingSpinner({ color, size }: LoadingSpinnerProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <CircleNotch size={size} color={colors[color]} />
    </Container>
  );
}
