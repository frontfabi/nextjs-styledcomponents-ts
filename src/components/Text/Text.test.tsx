import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Text } from './Text';

describe('<Text />', () => {
  test('it should mount', () => {
    render(<Text>Texto de exemplo</Text>);
    
    const text = screen.getByTestId('Text');

    expect(text).not.toBeNull;
  });
});