import React from 'react';
import { render } from '@testing-library/react';
import Tab, { TabProps } from './tab';

describe('Tab Component', () => {
    const tabProps:TabProps = {
        currentTab: 0,
        text: 'Appeareance'
    }

    test('render the component correctly', () => {
        const { container } = render(<Tab {...tabProps} />);

        expect(container.querySelector('li')).not.toBe(null);
        expect(container.querySelector('li').textContent).toBe('Appeareance');
    });
});