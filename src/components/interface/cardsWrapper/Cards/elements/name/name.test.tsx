import React from 'react';
import Name, { NameProps } from './name';
import { render } from '@testing-library/react';

const initProps:NameProps = {
    name: 'Michael',
    inPreview: false
}

describe('Name Component', () => {
    
    test('it renders the component', () => {
        const { container } = render(<Name {...initProps} />);

        expect(container.querySelector('.name')).not.toBe(null);
        expect(container.querySelector('.preview')).toBe(null);
        expect(container.querySelector('.name').textContent).toBe('Michael');
    });

    test('the component contains the class "preview" when this is passed in the props', () => {
        const { container } = render(<Name {...initProps} inPreview={true} />);
        
        expect(container.querySelector('.preview')).not.toBe(null);
    });
    
});