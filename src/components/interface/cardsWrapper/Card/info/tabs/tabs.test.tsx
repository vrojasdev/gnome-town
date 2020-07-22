import React from 'react';
import Tabs, { TabsProps } from './tabs';
import { render } from '@testing-library/react';

const initProps:TabsProps = {
    handleTabChange: () => {},
    tabActive: 0
}

describe('Tabs Component', () => {
    test('it renders the component', () => {
        const { container } = render(<Tabs {...initProps}  />);

        expect(container.querySelector('.tabs')).not.toBe(null);
        expect(container.querySelector('ul')).not.toBe(null);
        expect(container.querySelector('ul').children.length).toBe(3);
        expect(container.querySelector('li:first-child').textContent).toBe('Appeareance');
        expect(container.querySelector('li:nth-child(2)').textContent).toBe('Professions');
        expect(container.querySelector('li:last-child').textContent).toBe('Friends');
    });

    test('when tabActive=0 => the first li has a class "active"', () => {
        const { container } = render(<Tabs {...initProps}  />);

        expect(container.querySelector('li:first-child')).toHaveClass('active');
        expect(container.querySelector('li:nth-child(2)')).not.toHaveClass('active');
        expect(container.querySelector('li:last-child')).not.toHaveClass('active');
    });

    test('when tabActive=1 => the second li has a class "active"', () => {
        const { container } = render(<Tabs {...initProps} tabActive={1}  />);

        expect(container.querySelector('li:first-child')).not.toHaveClass('active');
        expect(container.querySelector('li:nth-child(2)')).toHaveClass('active');
        expect(container.querySelector('li:last-child')).not.toHaveClass('active');
    });

    test('when tabActive=2 => the third li has a class "active"', () => {
        const { container } = render(<Tabs {...initProps} tabActive={2} />);
        
        expect(container.querySelector('li:first-child')).not.toHaveClass('active');
        expect(container.querySelector('li:nth-child(2)')).not.toHaveClass('active');
        expect(container.querySelector('li:last-child')).toHaveClass('active');
    });
});