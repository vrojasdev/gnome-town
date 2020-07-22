import React from 'react';
import Info, { Appeareance, InfoProps } from './info';
import { render } from '@testing-library/react';


const initAppeareance:Appeareance = {
    age: 1,
    weight: 12,
    height:23,
    hairColor: 'red'
};
const initProps:InfoProps = {
    appeareance: initAppeareance,
    professions: [],
    friends: []
}

test('it renders the component, with the Tabs and Panels components', () => {
    const { container } = render(<Info {...initProps}  />);
    expect(container.querySelector('.info')).not.toBe(null);
    expect(container.querySelector('.tabs')).not.toBe(null);
    expect(container.querySelector('.panels')).not.toBe(null);
});