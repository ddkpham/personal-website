import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from '../index';

describe('Action Button ', () => {
  let renderResult;

  beforeEach(() => {
    renderResult = render(<Button label="this is a button" link={'#'} />);
  });

  test('renders label correctly', () => {
    const { getByText, debug } = renderResult;
    debug();
    const label = getByText('this is a button');
    expect(label).toBeInTheDocument();
  });

  test('sets href correctly', () => {});
});
