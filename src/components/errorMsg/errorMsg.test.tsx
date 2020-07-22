import React from 'react';
import ErrorMsg from './index';
import { render } from '@testing-library/react';

const msg = "There was an error getting the data.Please try again later";

test("renders the component with the expected error message", () => {
    const { container  } = render(<ErrorMsg />);
    expect(container.querySelector('.error')?.textContent).toBe(msg);
})

test('contains the <br /> of the error message', () => {
    const { container  } = render(<ErrorMsg />);
    expect(container.querySelector('.error')).toContainHTML('br');
});