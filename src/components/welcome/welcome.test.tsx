import React from 'react';
import Welcome from './welcome';
import { render } from '@testing-library/react';

describe('Welcome Component', () => {
    
    test("renders the component", () => {
        const { container } = render(<Welcome townName='' />);
        expect(container.querySelector('.welcome')).not.toBe(null); 
    });

    test("when the townName is empty => displays '...'", () => {
        const { container } = render(<Welcome townName='' />);
        expect(container.querySelector('.welcome').textContent).toBe('...'); 
    });

    test("when the townName is NOT empty => displays the welcome message", () => {
        const { container } = render(<Welcome townName='London' />);
        expect(container.querySelector('.welcome').textContent).toBe('Welcome to London'); 
    });

})