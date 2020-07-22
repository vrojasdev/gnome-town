import React from 'react';
import Card, { CardProps } from './Card';
import { render } from '@testing-library/react';
    
const initProps:CardProps = {
    index: 0,
    gnomeName: 'Gnome1',
    gnomeThumbnail: 'http://localhost/img_src.png',
    selected: 0,
    handleClick: () => {}
}

describe('Card Component', () => {

    test('it renders the component', () => {
        const { container } = render(<Card {...initProps} />);

        expect(container.querySelector('.card')).not.toBe(null);
        expect(container.querySelector('.thumbnail')).not.toBe(null);
        expect(container.querySelector('.name')).not.toBe(null);
    });

    test('if the index and selected props are equal, the element must have the class "active"', () => {
        const { container } = render(<Card {...initProps} />);

        expect(container.querySelector('.active')).not.toBe(null);
    });

    test('if the index and selected props are different, the element does NOT have the class "active"', () => {
        const { container } = render(<Card {...initProps} selected={56} />);

        expect(container.querySelector('.active')).toBe(null);
    });

})