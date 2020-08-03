import React from 'react';
import Tabs from './tabs';
import { render } from '@testing-library/react';

describe('Tabs Component', () => {
    test('it renders the component correctly', () => {
        const { container } = render(<Tabs />);

        expect(container.querySelector('.tabs')).not.toBe(null);
        expect(container.querySelector('ul')).not.toBe(null);
        expect(container.querySelector('ul').children.length).toBe(3);
        expect(container.querySelector('li:first-child').textContent).toBe('Appeareance');
        expect(container.querySelector('li:nth-child(2)').textContent).toBe('Professions');
        expect(container.querySelector('li:last-child').textContent).toBe('Friends');

        expect(container.querySelector('li:first-child')).toHaveClass('active');
        expect(container.querySelector('li:nth-child(2)')).not.toHaveClass('active');
        expect(container.querySelector('li:last-child')).not.toHaveClass('active');
    });
});