import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navbar from '../index';

describe('Navbar ', () => {
  let renderResult;

  const mockLabels = ['resume', 'home', 'about', 'portfolio'];
  beforeEach(() => {
    renderResult = render(<Navbar labels={mockLabels} />);
  });

  test.only('renders labels correctly', () => {
    const { getByText } = renderResult;
    mockLabels.forEach(label => {
      const text = getByText(label);
      expect(text).toBeInTheDocument();
    });
  });
});
